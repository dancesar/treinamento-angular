import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-por-especializacao',
  templateUrl: './consulta-por-especializacao.component.html',
  styleUrls: ['./consulta-por-especializacao.component.css']
})
export class ConsultaPorEspecializacaoComponent implements OnInit {

  @Input() consultas;
  @Input() titulo;

  constructor() { }

  ngOnInit() {
  }

}
