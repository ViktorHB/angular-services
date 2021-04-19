import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  // regidter service in root module
  providedIn: 'root'
})
export  class  AppCounterService{
  counter : number = 0;

  constructor(private logServise: LogService) {
  }
  increase(){
    this.logServise.log('increase')
    this.counter++
  }
  decrease() {
    this.logServise.log('decrease')
    this.counter--
  }
}

