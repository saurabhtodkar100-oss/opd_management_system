<div align="center">

# OPD Management System

An Angular application foundation for outpatient department workflows.

</div>

---

## About

The **OPD Management System** is the starting point for a web application focused on outpatient department services. The project is built with Angular 19 and currently includes scaffolded components for patient and doctor sign-in, registration, services, feedback, and a home page.

> **Project status:** This is an early-stage frontend scaffold. The listed pages are placeholders; routes, working user flows, and backend integrations have not been implemented yet.

## Technology

| Area | Technology |
| --- | --- |
| Frontend framework | Angular 19 |
| Language | TypeScript |
| Reactive programming | RxJS |
| Unit testing | Jasmine and Karma |

## Getting started

### Requirements

- Node.js and npm versions supported by Angular 19

### Install dependencies

```bash
npm ci
```

### Run locally

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server watches for source changes and reloads the application.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local Angular development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run watch` | Build in development mode and rebuild on changes. |
| `npm test` | Run unit tests with Karma. |

## Project structure

```text
src/
├── app/
│   ├── doctorlogin/    Doctor sign-in component
│   ├── feedback/       Feedback component
│   ├── home/           Home page component
│   ├── login/          Patient sign-in component
│   ├── ourservices/    Services component
│   ├── register/       Registration component
│   └── app.routes.ts   Route configuration
└── index.html          Application entry page
```

## Contributing

1. Create a branch for your change.
2. Install dependencies with `npm ci`.
3. Make and verify your changes with `npm run build` and, where applicable, `npm test`.
4. Open a pull request describing the change.

## Resources

- [Angular documentation](https://angular.dev/overview)
- [Angular CLI reference](https://angular.dev/tools/cli)
