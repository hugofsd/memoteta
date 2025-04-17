import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', //pode ser injetado em toda a aplicação por estar root
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(pagina: number): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);
    return this.http.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  // -------------------------------------------------

  listarExemplos(pagina: number): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    // o metodo set serve para subistituir o valor passamos o nome e o valor
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    //GET /posts?_page=1&_per_page=25 by: https://github.com/typicode/json-server
    /*return this.http.get<Pensamento[]>(
      `${this.API}?_page=${pagina}&_limete=${itensPorPagina}`
    ); */

    return this.http.get<Pensamento[]>(this.API, { params });
  }
}
