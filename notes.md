## Signals

To set up a sinal value you must use signal methods:

- `set`
- `update`

To access signal value on template you must use call operator `()`

To sync signals we use `computed`

```
Template + Component ----> Custom Data Service ----> HTTP Service ----> Backend Server
```

### Creating Signal from Observable

- `toSignal(Observable<T>)`
- ```ts
  product = toSignal(this.product$)
  ```
- Synchronous 
- Always the most recent value
- Automacally subscribe/unsubscribe

```ts
product = toSignal(this.product$, { initialValue: [] as Product[] })
```

```ts
o$ = of(1, 2, 3, 4);

s = toSignal(this.o$, { initialVlaue: 0 });

e = effect(() => console.log(this.s()));
```

### Creating Observable from Signal

- `toObservable(Signal<T>)`
- Async, does not emit until the signal is stable