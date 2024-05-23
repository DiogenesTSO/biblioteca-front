import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  ELEMENT_DATA: aluno[] = [{
    id: 1,
    matricula: 2015101137,
    nome: 'Diógenes Odisi',
    usuario: 'diogenes.odisi',
    senha: 'dto123',
    status: ['0'],
    perfis: ['0'],
    dataCriacao: '22/05/2024'
  }
]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status', 'data', 'acoes'];
  dataSource = new MatTableDataSource<aluno>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

