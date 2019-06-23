export interface MapItem {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mapItem: MapItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapItem.location.lat,
        lng: mapItem.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapItem.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
