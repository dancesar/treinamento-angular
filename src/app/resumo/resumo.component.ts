import { ResumoService } from './resumo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumo;

  constructor(private resumoService:ResumoService) {

   }

  ngOnInit() {
    this.resumoService.getResumo().subscribe(dados => this.resumo = dados);
  }

}
