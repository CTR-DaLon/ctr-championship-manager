import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Cup {
    id?: string,
    name: string
}

@Injectable({
  providedIn: 'root'
})
export class CupsService {
    private cups: Observable<Cup[]>;
    private cupCollection: AngularFirestoreCollection<Cup>;

    constructor(private afs: AngularFirestore) {
        this.cupCollection = this.afs.collection<Cup>('cups');
        this.cups = this.cupCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;

                    return { id, ...data};
                })
            })
        )
    }

    getCups(): Observable<Cup[]> {
        return this.cups;
    }

    getCup(id: string): Observable<Cup> {
        return this.cupCollection.doc<Cup>(id).valueChanges().pipe(
            take(1),
            map(cup => {
                cup.id;
                return cup;
            })
        );
    }

    addCup(cup: Cup): Promise<DocumentReference> {
        return this.cupCollection.add(cup);
    }

    updateCup(cup: Cup): Promise<void> {
        return this.cupCollection.doc(cup.id).update({
            name: cup.name
        });
    }

    deleteCup(id: string): Promise<void> {
        return this.cupCollection.doc(id).delete();
    }
}
