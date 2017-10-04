import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

import { punchCard } from './punchCard';

import { PunchCardService } from './punchCard.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [PunchCardService]
})
export class AboutComponent implements OnInit {

  constructor(private punchCardService: PunchCardService) {}

  public punchCardList:  Array<punchCard> = [];
  public model:punchCard = new punchCard();
  public submitted:boolean = false;

  ngOnInit() {
    var self = this;
       this.punchCardService.getPunchCards(function(punchCards:any){
         console.log(punchCards);
         self.punchCardList = punchCards;
       });
  }

  public onSubmit() {
    console.log(this.model);
    var jCard = JSON.stringify(this.model);
    var punch:punchCard = JSON.parse(jCard);
    var self = this;
    console.log(punch);
    this.submitted = true;
    this.punchCardService.postPunchCards(punch,function(punchCard:punchCard){
      console.log(punchCard);
      self.punchCardList.push(punchCard);
    });
  }

  public onCurrentDate() {
    console.log(this.model);
    this.model._punchInTime =  new Date();
  }

  public onCurrentDate2() {
    console.log(this.model);
    this.model._punchOutTime =  new Date();
  }

  public onDelete(punch:punchCard, index:any) {
    this.punchCardService.deletePunchCards(punch._id);
    console.log(punch, index,);
    this.punchCardList.splice(index, 1);
  }
}
