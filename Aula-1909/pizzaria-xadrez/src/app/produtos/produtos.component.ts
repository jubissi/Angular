import { Component, OnInit } from '@angular/core';
import {Pizza} from './lista-pizzas/pizza.model'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  pizzas: Pizza[] = [
    {
      id: "1",
      nome: "portuguesa",
      categoria: "presunto, ovos e cebola cobertos com mussarela",
      estimativa: "4.5",
      valor: "43.33",
      image: "assets/img/pizza/portuguesa.jpg"
    },

    {
      id: "2",
      nome: "mussarela",
      categoria: "Mussarela Scala e tomate fatiado.",
      estimativa: "4.5",
      valor: "35.00",
      image: "assets/img/pizza/mussarela.jpg"
    },

    {
      id: "3",
      nome: "caipira",
      categoria: "Filé de frango desfiado, milho e Catupiry",
      estimativa: "4.5",
      valor: "42.00",
      image: "assets/img/pizza/franco_cartupiry.jpg"
    },

    {
      id: "4",
      nome: "palmito",
      categoria: "fatias de palmito especial e leve cobertura de mussarela",
      estimativa: "4.5",
      valor: "48.00",
      image: "assets/img/pizza/palmito.jpg"
    },

    {
      id: "5",
      nome: "Peperoni",
      categoria: "mussarela, peperoni e leve toque de parmesão",
      estimativa: "4.5",
      valor: "39.00",
      image: "assets/img/pizza/peperoni.jpg"
    },

    {
      id: "5",
      nome: "Toscana",
      categoria: "calabresa moída com cobertura de catupiry",
      estimativa: "4.5",
      valor: "35.00",
      image: "assets/img/pizza/toscana.jpg"
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}
