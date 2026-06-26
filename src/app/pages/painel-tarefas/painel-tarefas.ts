import { Component } from '@angular/core'; // Importa o decorator que transforma a classe em componente Angular
import { CadastroTarefa } from '../../components/cadastro-tarefa/cadastro-tarefa'; // Importa o componente de cadastro de tarefas
import { ListaTarefas } from '../../components/lista-tarefas/lista-tarefas'; // Importa o componente de lista de tarefas
import { Router } from '@angular/router'; // Permite navegar entre as páginas

@Component({
  selector: 'app-painel-tarefas', // Nome da tag HTML usada para chamar esse componente
  standalone: true, // Indica que esse componente não depende de módulos (Angular moderno)
  imports: [ CadastroTarefa, ListaTarefas ],
  templateUrl: './painel-tarefas.html', // Caminho do arquivo HTML do componente
  styleUrls: ['./painel-tarefas.css'] // Caminho do arquivo de estilos CSS
})
export class PainelTarefas { // Classe principal do componente

  constructor(private router: Router) {
    
  }

  // Navega de volta para o Dashboard
voltarDashboard(): void {
  this.router.navigate(['/dashboard']); // Redireciona o usuário para o Dashboard
}

}