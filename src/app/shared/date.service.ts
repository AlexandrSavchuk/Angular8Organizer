import {Injectable} from "@angular/core";
import  * as moment from "moment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  changeMonth (dir: number){
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
    //console.log(this.date.value);
  }

  changeDate (date: moment.Moment) {
    const value =this.date.value.set({
      date: date.date(),
      month: date.month()
    })
    console.log('before'+this.date)
    this.date.next(value)
    console.log('after'+this.date)
  }


}
