# Services

## 1. Simple service 

Create a service that retrieves a subset of 'mock dishes'. These dishes will be used in our site as promotional ones. To make it simple you can harcode the index of desired values.

1. Create `services/dish.service.ts`, use Angular CLI.
2. Create an observable property `dishes$` from mocked data.
3. Create an observable property `featuredDishes$` that picks three dishes from `dishes$`

### Solution

## 2. Behavior Subject 

Create a behavior subject that must emit when ever a user selects a category. Initialize with `Category.ALL`.

Create a behavior subject that must emit when ever a user selects a dish. Initialize with `undefined`.

### Solution

## 3. Filtering

Create an observable that whenever the user selects a new category emits the dishes by the selected category.

Create an observable that whenever the user selects a new dish emit the selected dish. 

> NOTE: You will need HOO to avoid inner subscriptions.

### Solution

