import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private service: PensamentoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    //alert('Novo pensamento criado');
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
