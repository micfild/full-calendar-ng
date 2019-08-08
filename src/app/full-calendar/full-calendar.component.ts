import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {OptionsInput} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  options: OptionsInput;
  // calendarPlugins = [dayGridPlugin];
  eventsModel: any;
  @ViewChild('fullcalendar', {static: false}) fullcalendar: FullCalendarComponent;
  constructor() {
  }

  ngOnInit() {
    this.options = {
      editable: true,
      locale: frLocale,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: () => {
            alert('clicked the custom button!');
          }
        },
        myCustomButtons2: {
          text: 'dayview',
          click: () => {
            console.log('booh');
          }
        }
      },
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,timeGridWeek,timeGridDay',
      },
      buttonText: {
        today: 'Aujourd\'hui',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      weekNumbers: true,
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin]
    };
  }

  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}
