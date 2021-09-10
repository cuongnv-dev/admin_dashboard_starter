
# Admin dashboard starter using Reactjs



## Tech Stacks



1. React

2. Typescript

3. Redux Toolkit: state management

4. Redux Saga: redux middleware

5. Redux persist: persist state

6. tailwind CSS: A utility-first CSS framework

7. styled component: manage CSS

8. i18next: localization

9. axios: HTTP client

10. react-router-dom: manage app route

11. react-form-hook: manage form state

12. yup: validate form library

##  Mock Back-end
We use  `axios-mock-adapter`  for demo purpose, it intercepts  `axios`  requests and redirects to mocked handlers.

For more info on the library:  [https://github.com/ctimmerm/axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter).

##### How switching to the Real REST API

Remove mock initialization in the  `src/index.js`  file:

```

/**
 * Website public url.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;
-/**
- * Mock API, use return `mock` variable to add new mocks.
- *
- * @see https://github.com/ctimmerm/axios-mock-adapter
- */
-/* const mock = */_redux.mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
```

Setup your real  `API URL`  in the  `.env`  file and  **restart**  your application.