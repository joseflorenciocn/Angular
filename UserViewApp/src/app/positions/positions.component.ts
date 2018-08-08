import { Component, OnInit } from '@angular/core';
import { PositionService } from '../data/position.service';
import { Position } from '../Position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  public positions:Position[];
  private posSub;
  private loadingError:Boolean = false;
  private showspinner:Boolean = true;

  constructor(private ps:PositionService) { }

  ngOnInit() {

    this.posSub = this.ps.getPositions().subscribe((pos_returned)=>{
      
      this.positions = pos_returned
      this.showspinner = false }, (e) => {this.loadingError = true});

  }

  ngOnDestroy(){

    if (this.posSub)
    {
      this.posSub.unsubscribe();
    }
    
  }

}
