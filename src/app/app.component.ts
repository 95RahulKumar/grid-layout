import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private bp:BreakpointObserver){}
  col:number=4;
  gutterSize:number=0.3;
  ngOnInit(): void {;
      this.bp.observe(
        [
        Breakpoints.TabletPortrait,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.Medium
      ]
      ).subscribe(res=>{
        this.col=4;
        this.gutterSize=0.3;
    const brekp= res.breakpoints;
    if(brekp[Breakpoints.TabletPortrait])
    {
      this.col=3;
      
    }
    else if(brekp[Breakpoints.HandsetPortrait]){
      this.col=1;
      this.gutterSize=1;
    }
      })
  }
  title = 'res';
}
