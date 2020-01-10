import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Track {
  id?: string;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private tracks: Observable<Track[]>;
  private trackCollection: AngularFirestoreCollection<Track>;

  constructor(private afs: AngularFirestore) {
    this.trackCollection = this.afs.collection<Track>('tracks');
    this.tracks = this.trackCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  getTracks(): Observable<Track[]> {
    return this.tracks;
  }

  getTrack(id: string): Observable<Track> {
    return this.trackCollection
      .doc<Track>(id)
      .valueChanges()
      .pipe(
        take(1),
        map(track => {
          track.id = id;
          return track;
        })
      );
  }

  addTrack(track: Track): Promise<DocumentReference> {
    return this.trackCollection.add(track);
  }

  updateTrack(track: Track): Promise<void> {
    return this.trackCollection.doc(track.id).update({
      name: track.name,
      image: track.image
    });
  }

  deleteTrack(id: string): Promise<void> {
    return this.trackCollection.doc(id).delete();
  }
}
