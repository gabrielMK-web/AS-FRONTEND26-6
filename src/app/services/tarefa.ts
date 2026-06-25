import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tarefa {
  private tarefas: any[] = []; // esse array armazena todas as tarefas do sistema

  constructor() {}

  
  adicionarTarefa(tarefa: any): void { // adiciona uma tarefa no array
    this.tarefas.push(tarefa);
  }

 
  listarTarefas(): any[] { //retrona as tarefas que foram cadastradas 
    return this.tarefas;
  }

}