import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Frete } from 'app/Frete';
import { FreteService } from 'app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  frete: Frete;
  cep: string;
    
    constructor(private _freteService: FreteService) {

    }

    CalcularFrete(): void {
        this._freteService.getFrete(this.cep)
            .subscribe((data: Frete) => this.frete = data,
            error => console.log(error));
    }
}
