```c#
class Address
{
    //
}

class Person
{
    // Person()
    // {
    //     var address = new Address();
    // }
    // props
    Person(address)
    {

    }

    GetAddress () {}

    SetAddress () {}
}

// UT
```

```html
<ul class="carousel-container">
  <!-- <ng-content></ng-content> -->
  <ng-template appDynamicCarouselItemAnchor></ng-template>
</ul>
```

```ts
import { Component, ViewChild, ComponentFactoryResolver } from "@angular/core";

import { CarouselItemComponent } from "../carousel-item/carousel-item.component";
import { DynamicCarouselItemAnchorDirective } from "../dynamic-carousel-item-anchor.directive";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent {
  @ViewChild(DynamicCarouselItemAnchorDirective)
  dynamicPlaceHolder!: DynamicCarouselItemAnchorDirective;
  items: CarouselItemComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addCarouselItem(template: any, data: any) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        CarouselItemComponent
      );
    const viewContainerRef = this.dynamicPlaceHolder.viewContainer; // [2]

    const componentRef = viewContainerRef.createComponent(componentFactory); // [3]
    const instance: CarouselItemComponent =
      componentRef.instance as CarouselItemComponent;
    instance.template = template; //[4]
    instance.dataContext = data;
    this.items.push(instance); // [5]
  }
}
```

- Building blocks de Angular - Módulos
- App - 1 módulo - Root Module - app.module.ts
- Injector - Dictionary

```ts
const dicc = {
    ['servA']: get() {

    },
};
```

> ANGULAR los servicios son 'singleton'

```bash
ng new <project>
```

```bash
ng g c <component name> -s -t --flat --skip-tests
```

<pre>

  <app-root> (M) >> PersonService
    -<app-person>
    -<app-female> >> PersonService -> FemaleService
      -<app-person>
      
</pre>

## HTML 5 routes vs

- nginx, apache....

- origin - aka www.mysite.es
  - default www.mysite.es/index.html
  - other www.mysite.es/other.html
  - other js www.mysite.es/resource/foo.js

## Summary 02/06

- Building block - modulos
  - Declaran funcionaalidad
    - Components, Directives, Pipes
- Components
  - Template -> HTML con bindings sin procesar por Angular
  - Comportamiento
- {{}} - Evalua expresion de JS
- () - Binding evento
- [] - Binding attributo
- Servicios en Angular

  - 'singletons'
  - Jerarquizada y paralelizada
  - Técnicas para multiples instancias servicios
  - useClass -> Por defecto
  - useValue, useFactory...
  - Múltiples implementaciones de unu servicio -> Abstract Class

- Routing

## State Management Service

```ts
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { GameModel } from "./game.model";
import { HTTP_DATA_LOGGER } from "../core/http-data-logger.service";
import { HTTP_ERROR_HANDLER } from "../core/http-error-handler.service";

@Injectable()
export class GameService {
  private gamesUrl = "api/games";
  private games!: GameModel[];

  constructor(
    private http: HttpClient,
    @Inject(HTTP_DATA_LOGGER) private logger: any,
    @Inject(HTTP_ERROR_HANDLER) private errorHandler: any
  ) {}

  getGames(): Observable<GameModel[]> {
    if (this.games) {
      return of(this.games);
    }
    return this.http.get<GameModel[]>(this.gamesUrl).pipe(
      tap(this.logger.logJSON),
      map((data) => {
        this.games = data;
        return data;
      }),
      catchError(this.errorHandler)
    );
  }

  getGame(id: number): Observable<GameModel> {
    if (id === 0) {
      return of(this.initializeGame());
    }
    if (this.games) {
      const foundIten = this.games.find((i) => i.id === id);
      if (foundIten) {
        return of(foundIten);
      }
    }
    const url = `${this.gamesUrl}/${id}`;
    return this.http
      .get<GameModel>(url)
      .pipe(tap(this.logger.logJSON), catchError(this.errorHandler));
  }

  deleteGame(id: number): Observable<GameModel> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const url = `${this.gamesUrl}/${id}`;
    return this.http.delete<GameModel>(url, { headers: headers }).pipe(
      tap(this.logger.logJSON),
      tap((data) => {
        const foundIndex = this.games.findIndex((i) => i.id === id);
        if (foundIndex > -1) {
          this.games.splice(foundIndex, 1);
        }
      }),
      catchError(this.errorHandler)
    );
  }

  saveGame(game: GameModel): Observable<GameModel> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    if (game.id === 0) {
      return this.createGame(game, headers);
    }
    return this.updateGame(game, headers);
  }

  private createGame(
    game: GameModel,
    headers: HttpHeaders
  ): Observable<GameModel> {
    game.id = null; //NOTE: Due to angular-in-memory-web-api
    return this.http
      .post<GameModel>(this.gamesUrl, game, { headers: headers })
      .pipe(
        tap(this.logger.logJSON),
        tap((data) => this.games.push(data)),
        catchError(this.errorHandler)
      );
  }

  private updateGame(
    game: GameModel,
    headers: HttpHeaders
  ): Observable<GameModel> {
    const url = `${this.gamesUrl}/${game.id}`;
    return this.http
      .put<GameModel>(url, game, { headers: headers })
      .pipe(tap(this.logger.logJSON), catchError(this.errorHandler));
  }

  private initializeGame(): GameModel {
    return {
      id: 0,
      name: "",
      code: "",
      category: "",
      tags: [],
      release: "",
      price: 0,
      description: "",
      rating: 0,
      imageUrl: "",
    };
  }
}
```

Beer factory

- arrancar la cinta / (rxjs) Subscribe
- llenado, etiquetado... / (rxjs) `pipe` conjunto de operadores
- como obeservador / (rxjs) Observer
- parar la cinta / (rxjs) Unsubscribe

- Observer
  - next()
  - error()
  - complete()

```ts
const observer = {
  next: (beer: any) => console.log(`Beer was emitted ${beer}`),
  error: (error: any) => console.log(`Beer was emitted ${error}`),
  complete: () => console.log(`No more beers, go home`),
};

const beerStream = new Observable((beerObserver) => {
  beerObserver.next("Beer 1");
  beerObserver.next("Beer 2");
  beerObserver.complete();
});

const sub = beerStream.subscribe(observer);
sub.unsubscribe();
```

- **Observable**
  - Cualquier fuente de datos
- **Observer**
  - Observa la fuente de datos
  - Funciones que procesan las notificaciones de la fuente de datos: `next()`, `error()`, `complete()`
- **Subscriber**
  - Un `Observer` que tiene `unsubscribe`
- **Subscription**
  - Repressenta la ejecución del Observable
  - `subscribe()` devuelve una **Subscription**
