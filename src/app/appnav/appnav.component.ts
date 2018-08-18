import { Component,  OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(
        (result:BreakpointState) => {
          console.log(result.matches);
          return result.matches;
        }));
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  ngOnInit(){
  }

  public headerClick(){
    console.log("Header clicked...");
    //console.log(navigator.usb.getDevices(
    //  (result)=>{
    //    console.log(result);
    //  }
    //));
   
      
  }

}
