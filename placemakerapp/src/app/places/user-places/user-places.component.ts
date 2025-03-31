import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  private destroyRef = inject(DestroyRef);
  placeService = inject(PlacesService);
  error = signal<string>('');
  places = this.placeService.loadedUserPlaces();

  ngOnInit(): void {
    this.isFetching.set(true);
    const clientRequestSubscription = this.placeService.loadUserPlaces()
      .subscribe({
        error: (error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });

    this.destroyRef.onDestroy(() => {
      clientRequestSubscription.unsubscribe();
    })
  }
  onRemovePlace(place: Place) {
    const clientRequestSubscription = this.placeService.removeUserPlace(place)
      .subscribe({
        error: (error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });

    this.destroyRef.onDestroy(() => {
      clientRequestSubscription.unsubscribe();
    })
  }

}
