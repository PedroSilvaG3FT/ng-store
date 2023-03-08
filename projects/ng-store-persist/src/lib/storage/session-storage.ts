import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  constructor() {}

  get(key: string) {
    return sessionStorage.getItem(key);
  }
  set(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}
