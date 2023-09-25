import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  usernames: string[];
  constructor() {
    this.usernames = ['pikachu', 'pairi', 'kkobugi'];
  }

  getUsername(idx: number) {
    if (idx < 0 || idx >= this.usernames.length)
      throw new Error('Invalid index');
    return this.usernames[idx];
  }

  postUsername(name: string) {
    if (name.length < 2) {
      throw Error('Name must be longer than 2 letters');
    }
    this.usernames.push(name);
    return this.usernames;
  }

  deleteUsername(idx: number) {
    if (idx < 0 || idx >= this.usernames.length)
      throw new Error('Invalid index');
    this.usernames.splice(idx, 1);
    return this.usernames;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
