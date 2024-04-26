import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { 
    this.init();
  }

  init() {
    console.log("INIT");
    this.storage.create();
    console.log('DONE');
  }

  async getData(key: string) {
    console.log('get data');
    return await this.storage.get(key) || [];
  }

  async addData(key: string, item: any[]) {
    const storedData = await this.storage.get(key) || [];
    return this.storage.set(key, item);
  }

}

