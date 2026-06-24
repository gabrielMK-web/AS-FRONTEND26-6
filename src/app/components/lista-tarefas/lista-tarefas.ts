import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {

  tarefas = [ // lista temporaria
    {
      titulo: 'Exemplo de tarefa',
      descricao: 'Isso é uma tarefa teste',
      concluida: false
    }
  ];

  constructor() {
    
  }}




