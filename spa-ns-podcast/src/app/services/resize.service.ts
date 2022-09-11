import { EventEmitter, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  width:number;

  public onResize$ = new EventEmitter<{ width: number; height: number; }>();

  constructor(eventManager: EventManager) {
    eventManager.addGlobalEventListener('window', 'resize',
      e => this.onResize$.emit({
        width: e.target.innerWidth,
        height: e.target.innerHeight
      }));
    
   }
  // onResize(event: UIEvent) {
  //   this.resizeSubject.next(<Window>event.target);
  // }

getWindowSize() {

  this.width= window.innerWidth;

    return this.width
        //you can sense other parameters here
    
};

}
