import { FaturamentoService } from './faturamento.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento;
  faturamentoInscricao;

  constructor(private faturamentoService:FaturamentoService) { }

  ngOnInit() {
    this.faturamentoService.getFaturamento().subscribe(dados => this.faturamento = dados);
  }

  ngOnDestroy() {
    this.faturamentoInscricao.unsubscribe();
  }

}
