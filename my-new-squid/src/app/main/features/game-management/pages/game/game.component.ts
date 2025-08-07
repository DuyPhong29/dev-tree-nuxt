import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'dx-game',
  imports: [
    MatTableModule,
    MatCardModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  displayedColumns: string[] = ['account', 'score'];
  dataSource = [
    { account: 'User 1', score: 95 },
    { account: 'User 2', score: 87 },
    { account: 'User 3', score: 92 },
    { account: 'User 4', score: 76 },
    { account: 'User 5', score: 89 }
  ];
}
