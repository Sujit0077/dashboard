import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
const Calendar = () => {
  return (
    <div className="m-2 md:m-10  mt-24 p-14 md:p-10 bg-slate-300 rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Agenda, Resize, DragAndDrop, Month]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
