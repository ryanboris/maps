import faker from 'faker';
import { MapItem } from './CustomMap';

export class User implements MapItem {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = 'blue';
  }

  markerContent(): string {
    return `
    <div>
      <h1>User Name: ${this.name}</>
    </div>
    `;
  }
}
