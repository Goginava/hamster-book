import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad-Freak'];
  images = ['assets/img/petimages/5.jpg','assets/img/petimages/6.jpg', 'assets/img/petimages/7.jpg', 'assets/img/petimages/8.jpg' ];

  constructor() { }

  ngOnInit(): void {
  }

}
