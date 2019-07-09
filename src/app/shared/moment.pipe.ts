import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: 'moment',
  pure: false // need to shows change in the month value, by default pure = true and pipe not shows changes
})
export class MomentPipe implements PipeTransform{
  transform(m: moment.Moment, format: string = 'MMMM YYYY'): string {
    return m.format(format)
  }
}
