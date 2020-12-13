import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AdminServiceService {
  private storeSource = new BehaviorSubject("default message");
  currentStore = this.storeSource.asObservable();

  constructor() {}

  public changeMessage(message: string) {
    console.log("set message in asObservable: " + message);
    this.storeSource.next(message);
  }
}
