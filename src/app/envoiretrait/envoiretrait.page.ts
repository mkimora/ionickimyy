import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envoiretrait',
  templateUrl: './envoiretrait.page.html',
  styleUrls: ['./envoiretrait.page.scss'],
})
export class EnvoiretraitPage implements OnInit {

  public buttonClicked: boolean = false; //Whatever you want to initialise it as 
  public butonClicked: boolean = false;

  //masquer l' envoi
  public onButtonClick() {
    this.butonClicked = !this.butonClicked;
    this.buttonClicked = this.buttonClicked;
  }
  //masquer le retrait
  public offButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    this.butonClicked = this.butonClicked;
  }

  constructor() { }

  ngOnInit() {
  }

}
