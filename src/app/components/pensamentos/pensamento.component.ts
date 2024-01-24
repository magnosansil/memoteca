import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento/pensamento.component.html',
  styleUrls: ['./pensamento/pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: "I Love Angular",
    autoria: "Magno",
    modelo: "modelo3"
  }


  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    let classePensamento: string;

    if (this.pensamento.conteudo.length > 256) {
      classePensamento ='pensamento-g'
    } else {
      classePensamento ='pensamento-p'
    }

    return classePensamento
  }
}
