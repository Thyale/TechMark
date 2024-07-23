import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  InputNome: string = "";
  InputEmail: string = "";
  Inputtexto: string = "";

  duvida = {
    nome: this.InputNome,
    email: this.InputEmail,
    texto: this.Inputtexto
  };

  constructor(private toastr: ToastrService) {}

  EnviarContato() {
    if (this.InputNome === "" || this.InputEmail === "" || this.Inputtexto === "") {
      this.toastr.error('Preencha todo o formulário antes de enviar', 'ERRO!', {
        positionClass: 'toast-top-right',
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        newestOnTop: true,
        enableHtml: true,
        toastClass: 'ngx-toastr custom-toast-error'
      });
    } else {
      this.duvida.nome = this.InputNome;
      this.duvida.email = this.InputEmail;
      this.duvida.texto = this.Inputtexto;

      localStorage.setItem('BuscarDuvida', JSON.stringify(this.duvida));

      this.toastr.success('Em breve entraremos em contato', 'Mensagem recebida!', {
        positionClass: 'toast-top-right',
        timeOut: 4000,
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        newestOnTop: true,
        enableHtml: true,
        toastClass: 'ngx-toastr custom-toast-success'
      });
    }
  }
}
