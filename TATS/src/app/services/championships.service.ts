import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';

export interface Championship {
    id?: string,
    name: string,
    img: string
}

@Injectable({
  providedIn: 'root'
})

export class ChampionshipsService {
    private championships: Observable<Championship[]>;
    private championshipCollection: AngularFirestoreCollection<Championship>;

    constructor(private afs: AngularFirestore) {
        this.championshipCollection = this.afs.collection<Championship>('championships');
        this.championships = this.championshipCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data};
                })
            })
        )
    }

    getChampionships(): Observable<Championship[]> {
        return this.championships;
    }

    getChampionship(id: string): Observable<Championship> {
        return this.championshipCollection.doc<Championship>(id).valueChanges().pipe(
            take(1),
            map(championship => {
                championship.id = id;
                return championship
            })
        );
    }

    addChampionship(championship: Championship): Promise<DocumentReference> {
        return this.championshipCollection.add(championship);
    }

    updateChampionship(championship: Championship): Promise<void> {
        return this.championshipCollection.doc(championship.id).update({
            name: championship.name,
            img: championship.img
        });
    }

    deleteChampionship(id: string): Promise<void> {
        return this.championshipCollection.doc(id).delete();
    }
}
