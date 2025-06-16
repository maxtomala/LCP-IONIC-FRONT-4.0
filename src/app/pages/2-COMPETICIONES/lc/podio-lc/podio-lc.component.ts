import { Component, Input, OnInit } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';

@Component({
  selector: 'app-podio-lc',
  templateUrl: './podio-lc.component.html',
  styleUrls: ['./podio-lc.component.scss'],
})
export class PodioLcComponent  implements OnInit {
    @Input() liga: LigaCorporal | null = null; //para q reciba la liga


  constructor() { }

  ngOnInit() {}

}
