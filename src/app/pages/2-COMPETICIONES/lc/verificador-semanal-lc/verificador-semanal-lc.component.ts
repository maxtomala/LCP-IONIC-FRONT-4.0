import { Component, Input, OnInit } from '@angular/core';
import { LigaCorporal } from 'src/app/models/lc/liga-corporal.model';

@Component({
  selector: 'app-verificador-semanal-lc',
  templateUrl: './verificador-semanal-lc.component.html',
  styleUrls: ['./verificador-semanal-lc.component.scss'],
})
export class VerificadorSemanalLcComponent  implements OnInit {
  @Input() liga: LigaCorporal | null = null; //para q reciba la liga

usuario: any;

  constructor() { }

  ngOnInit() {}

  abrirModal(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
