import { Component } from '@angular/core';//decorador do angular

@Component({
  selector: 'app-lista-tarefas', // Nome da tag html
  standalone: true, // Componente independente (Angular novo)
  templateUrl: './lista-tarefas.html', //HTML do componente
  styleUrl: './lista-tarefas.css', //Css
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




