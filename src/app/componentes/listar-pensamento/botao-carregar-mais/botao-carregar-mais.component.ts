import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css'],
})
export class BotaoCarregarMaisComponent implements OnInit {
  //input para essa class consiga receber informações do componente pai
  @Input() haMaisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
