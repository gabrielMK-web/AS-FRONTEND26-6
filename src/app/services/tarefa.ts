import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tarefa {
  private tarefas: any[] = []; // esse array armazena todas as tarefas do sistema

  constructor() {}

    listarTarefas(): any[] {
    return this.tarefas;
  }

  // Adiciona uma nova tarefa no array
  adicionarTarefa(tarefa: any): void {

  this.tarefas.push({
    ...tarefa,
    concluida: false
  });

  console.log(this.tarefas);


}

// Remove uma tarefa pelo índice
removerTarefa(indice: number): void {
  this.tarefas.splice(indice, 1);
}

// Edita uma tarefa pelo índice
editarTarefa(indice: number, tarefaAtualizada: any): void {
  this.tarefas[indice] = tarefaAtualizada;
}
}

