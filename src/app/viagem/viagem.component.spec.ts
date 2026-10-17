import { Component, OnInit } from '@angular/core';
import { IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone'; // ou '@ionic/angular' dependendo da versão
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonThumbnail, IonLabel]
})
export class ViagemComponent {}