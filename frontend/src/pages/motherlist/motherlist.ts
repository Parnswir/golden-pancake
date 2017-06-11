import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MotherService } from './../../app/services/MotherService';

@Component({
  selector: 'page-list',
  templateUrl: 'motherlist.html',
  providers: [MotherService]
})
export class MotherlistPage implements OnInit {

  mode = 'Observable'
  errorMessage:string
  results:any=[]

  constructor(public navCtrl: NavController, private midwifeService: MotherService) {

  }

  ngOnInit() {
    this.getMothers();
  }

  getMothers() {
    this.midwifeService.getMothersByMidwife(123) //todo: me
                         .subscribe(
                           results => this.results = results,
                           error =>  this.errorMessage = <any>error);
  }

}