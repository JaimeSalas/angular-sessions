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





