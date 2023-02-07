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
import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { DynamicCarouselItemAnchorDirective } from '../dynamic-carousel-item-anchor.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @ViewChild(DynamicCarouselItemAnchorDirective) dynamicPlaceHolder!:
  DynamicCarouselItemAnchorDirective;
  items: CarouselItemComponent[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  addCarouselItem(template: any, data: any) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(CarouselItemComponent);
    const viewContainerRef = this.dynamicPlaceHolder.viewContainer; // [2]

    const componentRef = viewContainerRef.createComponent(componentFactory); // [3]
    const instance: CarouselItemComponent = componentRef.instance as CarouselItemComponent;
    instance.template = template; //[4]
    instance.dataContext = data;
    this.items.push(instance); // [5]
  }

}

```

* Building blocks de Angular - Módulos
* App - 1 módulo - Root Module - app.module.ts
* Injector - Dictionary

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

## HTML 5 routes vs #

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





