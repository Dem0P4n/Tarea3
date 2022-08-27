import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea3';
  public color: string = "#FFFFFF";
  public colorLetras: string = "#F5C7A9";
  public colorFondo: string = "#100720"
  public capturarColor(event: Event): void{
    const color = (event.target as HTMLInputElement).value
    this.color = color;
  }
  public capturarColorLetras(event: Event):void{
    const colorLetras = (event.target as HTMLInputElement).value
    this.colorLetras = colorLetras;
  }
  public capturarColorFondo(event: Event):void{
    const colorFondo = (event.target as HTMLInputElement).value
    this.colorFondo = colorFondo;
  }

}
