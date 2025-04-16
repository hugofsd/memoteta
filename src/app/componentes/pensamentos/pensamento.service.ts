import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', //pode ser injetado em toda a aplicação por estar root
})
export class PensamentoService {
  constructor(private http: HttpClient) {}
}
