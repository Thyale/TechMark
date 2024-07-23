import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  Nome: string = "";
  Email: string = "";
  texto: string = "";

  duvida = {
    nome: this.Nome,
    email: this.Email,
    texto: this.texto
  };

  EnviarContato() {
    this.duvida.nome = this.Nome;
    this.duvida.email = this.Email;
    this.duvida.texto = this.texto;
  
    localStorage.setItem('BuscarDuvida', JSON.stringify(this.duvida));
  }
}
