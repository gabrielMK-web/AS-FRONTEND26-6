import { Component } from '@angular/core'; // decorator do Angular
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // forms reativos
import { Tarefa } from '../../services/tarefa'; // service de tarefas

@Component({
  selector: 'app-cadastro-tarefa', // seletor do componente
  standalone: true, // componente independente
  imports: [ReactiveFormsModule], // habilita forms reativos
  templateUrl: './cadastro-tarefa.html', // HTML
  styleUrls: ['./cadastro-tarefa.css'] // CSS
})
export class CadastroTarefa {

  tarefaForm: FormGroup; // formulário da tarefa

  constructor(
    private fb: FormBuilder, // NECESSÁRIO para criar formulário
    private tarefaService: Tarefa // service das tarefas
  ) {

    // cria o formulário
    this.tarefaForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });

  }

  // adiciona tarefa
 adicionarTarefa(): void {

  if (this.tarefaForm.valid) {

    this.tarefaService.adicionarTarefa(this.tarefaForm.value);

    this.tarefaForm.reset();

    // força atualização manual da view da lista
    this.tarefaService.listarTarefas();

  }

}

}