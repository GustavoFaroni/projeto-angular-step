import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-busca-produtos',
templateUrl: './busca-produtos.html'
})
export class BuscaProdutos {
campoBusca = new FormControl('');
resultados: any[] = [];

constructor(private http: HttpClient) {
this.campoBusca.valueChanges
.pipe(
debounceTime(500),
tap(valor => console.log('Buscando:', valor)),
switchMap(valor =>
this.http.get<any[]>(`https://fakestoreapi.com/products`)
)
)
.subscribe(res => {
this.resultados = res;
});
}
} 
