import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { MycurrencyPipe } from './pipe/mycurrency.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  curr = '25.25';
  @ViewChild('inputbox') focus1: ElementRef;
  constructor(private cpipe: MycurrencyPipe) {}
  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    // dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,
    disableUntil: { year: 2016, month: 8, day: 10 },
    dateFormat: 'mm/dd/yyyy'
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  ngOnInit() {
    //this.curr = '25.25';
    console.log('==========', this.focus1.nativeElement.value);
    this.focus1.nativeElement.value = this.cpipe.transform(
      this.focus1.nativeElement.value
    );
  }
  ngAfterViewInit() {
    console.log('==========', this.focus1.nativeElement.value);
    this.focus1.nativeElement.value = this.cpipe.transform(
      this.focus1.nativeElement.value
    );
    console.log('==========', this.focus1.nativeElement.value);

    setTimeout(() => {
      this.focus1.nativeElement.value = this.cpipe.transform(
        this.focus1.nativeElement.value
      );
      console.log('==========', this.focus1.nativeElement.value);
    }, 0);
  }
}
