import { Component } from '@angular/core'; // Importa o decorator de componente Angular
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa ferramentas de formulário reativo
import { Tarefa } from '../../services/tarefa';

@Component({
  selector: 'app-cadastro-tarefa', // Tag HTML do componente
  standalone: true, // Componente independente (Angular novo)
  imports: [ReactiveFormsModule], // Permite usar formulários reativos no HTML
  templateUrl: './cadastro-tarefa.html', // Arquivo HTML
  styleUrls: ['./cadastro-tarefa.css'] // Arquivo CSS
})
export class CadastroTarefa {

  tarefaForm: FormGroup; // Cria o formulário da tarefa

  constructor(private fb: FormBuilder, private tarefa: Tarefa) { // Injeta o FormBuilder para criar formulários

    this.tarefaForm = this.fb.group({ // Cria o formulário com campos
      titulo: ['', Validators.required], // Campo título obrigatório
      descricao: ['', Validators.required] // Campo descrição obrigatório
    });

  }

  adicionarTarefa() {

  if (this.tarefaForm.valid) {
    this.tarefa.adicionarTarefa(this.tarefaForm.value);
    this.tarefaForm.reset();
  }
}
}