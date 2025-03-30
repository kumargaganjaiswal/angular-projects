import { afterNextRender, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {

  isFetching = signal(false);
  places = signal<Place[] | undefined>(undefined);
  private placeService = inject(PlacesService);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  error = signal<string>('');

  ngOnInit(): void {
    this.isFetching.set(true);
    const clientRequestSubscription = this.placeService.loadAvailablePlaces()
      .subscribe({
        next: (palces) => {
          this.places.set(palces);
        },
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

  onSelectPlace(selectedPlace: Place) {
    const clientRequestSubscription = this.placeService.addPlaceToUserPlaces(selectedPlace).subscribe(
      {
        next: (place) => console.log(place)
      }
    )
    this.destroyRef.onDestroy(() => {
      clientRequestSubscription.unsubscribe();
    })
  }
}
