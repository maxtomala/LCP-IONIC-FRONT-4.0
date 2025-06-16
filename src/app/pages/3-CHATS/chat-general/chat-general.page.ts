import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-general',
  templateUrl: './chat-general.page.html',
  styleUrls: ['./chat-general.page.scss'],
})
export class ChatGeneralPage implements OnInit {
  segmentValue = 'todos'; // valor por defecto

    ngOnInit() {
  }
 constructor(private router: Router) {}

irParticipantes() {
  this.router.navigate(['pages/configuracion-lc']);
}

    segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

}
