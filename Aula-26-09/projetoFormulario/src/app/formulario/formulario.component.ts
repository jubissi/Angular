import { Component, OnInit } from '@angular/core';
import { Forms } from './../forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sexo = ['Feminino', 'Masculino'];
  estado = ['SP', 'MG', 'SC'];

  model = new Forms (0, '', '', '', '', '', '', '');

  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  novoForm() {
    this.model = new Forms (0, '', '', '', '', '', '', '');
  }

}
