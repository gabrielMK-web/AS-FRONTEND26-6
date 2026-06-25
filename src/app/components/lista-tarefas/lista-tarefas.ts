import { Component } from '@angular/core';//decorador do angular
import { Tarefa } from '../../services/tarefa';

@Component({
  selector: 'app-lista-tarefas', // Nome da tag html
  standalone: true, // Componente independente (Angular novo)
  templateUrl: './lista-tarefas.html', //HTML do componente
  styleUrl: './lista-tarefas.css', //Css
})
export class ListaTarefas {

  tarefas: any[] = [];

  constructor(private tarefa: Tarefa) {
     this.tarefas = this.tarefa.listarTarefas();
    
  }}




