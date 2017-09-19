import { Component, OnInit } from '@angular/core';
import { Forms } from './../forms'; //importando a classe Forms criada

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  assuntos = ['Dúvidas', 'Produtos', 'Reclamações', 'Elogios'];
  model = new Forms(18, 'Renato Bortolin', 'renato@gmail.com', this.assuntos[2], 'bla bla bla', '999999999');
  submitted = false;
  onSubmit() {this.submitted = true;}
  get diagnostic(){return JSON.stringify(this.model);}

  novoForm() {
    this.model = new Forms(42, '', '', '', '', '');
  }

}
