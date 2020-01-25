import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private FirstNumber:number=null;
  private SecondNumber:number=null;
  private Result:number=null;


public getAdd():void {
  this.Result=this.FirstNumber+this.SecondNumber;
}
public getSub():void {
  this.Result=this.FirstNumber-this.SecondNumber;
}
public getMul():void {
  this.Result=this.FirstNumber*this.SecondNumber;
}
public getDiv():void {
  this.Result=this.FirstNumber/this.SecondNumber;

}
}
