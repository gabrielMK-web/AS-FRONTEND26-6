import { Component } from '@angular/core';//decorador do angular
import { Tarefa } from '../../services/tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas', // Nome da tag html
  standalone: true, // Componente independente (Angular novo)
  imports: [CommonModule], // <- ADICIONE ISSO
  templateUrl: './lista-tarefas.html', //HTML do componente
  styleUrl: './lista-tarefas.css', //Css
})
export class ListaTarefas {

   tarefas: any[] = [];

  constructor(private tarefa: Tarefa) {

    this.carregarTarefas();

  }

  // carrega tarefas do service
  carregarTarefas(): void {
    this.tarefas = this.tarefa.listarTarefas();
  }

  // NOVO: força atualização
  atualizarLista(): void {
    this.carregarTarefas();
  }

}




