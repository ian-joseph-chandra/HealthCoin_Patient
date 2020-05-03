import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

const USER_KEY = 'user_info';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  public set(jsonObject): void {
    // get array of tasks from local storage
    const currentTodoList = this.storage.get(USER_KEY) || [];

    // push new task to array
    currentTodoList.push(jsonObject);

    // insert updated array to local storage
    this.storage.set(USER_KEY, currentTodoList);
  }

  checkProfileStorage() {
    const profileData = this.storage.get(USER_KEY);

    // return false if email and birth_date is not set.
    return !(profileData.email === undefined || profileData.birth_date === undefined);
  }
}
