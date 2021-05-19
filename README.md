# Sentiment Analysis

This project exemplifies how to consume the Shipped Brain API by making a prediction to the [Sentiment Analysis](https://app.shippedbrain.com/models/sentiment-analysis/1) model.

The app was built using Angular 9.

## Authenticate requests

In `/src/app/interceptors/auth.interceptor.ts` replace `<your_token>` with your Shipped Brain token. 

In a real world use case, we recommend *NOT* storing your authorization token the way we did here for demonstration purposes, but instead choose a safer alternative *(i.e: environment variables)*.

```typescript
const token: string = '<your_token>'
```

To find out your token, [login](https://app.shippedbrain.com/login) to your [Shipped Brain](https://app.shippedbrain.com) account, access the [Dashboard](https://app.shippedbrain.com/dashboard/summary) and copy it from its respective area.

## Note

When cloning this repository, before running the app you must install the npm packages with:
```bash
npm run install
```

---

## Angular info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
