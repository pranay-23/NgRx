import { Component } from '@angular/core';
import { CounterbuttonComponent } from './counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './customcounter/customcounter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterbuttonComponent,CounterdisplayComponent,CustomcounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
