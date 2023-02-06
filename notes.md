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
