# Library Management System

Web interface for a library. Staff register and sign in, then manage the catalogue and the people who borrow from it.

After login the app stores a JWT in the `lmsToken` cookie and sends it as `Authorization: Bearer …` on later requests.

| Path        | What it does                               |
| ----------- | ------------------------------------------ |
| `/`         | Sign in                                    |
| `/register` | Create an account                          |
| `/books`    | List books, and add, edit, or remove one   |
| `/members`  | List members, and add, edit, or remove one |

A new account is a `USER`. The API lets that role read books. Adding or changing books, and anything under members, requires `LIBRARIAN` or `ADMIN`. Deleting a book requires `ADMIN`.

## Stack

- React 19, built with Create React App
- React Router for the pages above
- Redux Toolkit for state, Redux Saga for API calls
- Axios for HTTP
- Sass for styles

The UI talks to the `library-management-system` API: Spring Boot 3, Spring Security with JWT, and PostgreSQL.

## Run it

You need Node.js, Yarn, and the API running at `http://localhost:8080`.

1. In the API project, create the `library_management_system` database, set `JWT_SECRET`, and start the server:

   ```bash
   export JWT_SECRET=your-secret
   ./mvnw spring-boot:run
   ```

   The API allows `http://localhost:3000` by default. Database settings live in that project's `application.yml`.

2. In this project, install dependencies and point the UI at the API. `.env` is not committed. The value needs the trailing slash, because request paths are appended to it.

   ```bash
   yarn install
   echo 'REACT_APP_API_URL=http://localhost:8080/api/' > .env
   yarn start
   ```

3. Open [http://localhost:3000](http://localhost:3000), register or sign in, then use Books and Members.

## Scripts

| Command       | What it does                 |
| ------------- | ---------------------------- |
| `yarn start`  | Dev server on port 3000      |
| `yarn test`   | Run the tests once           |
| `yarn build`  | Production build in `build/` |
| `yarn lint`   | ESLint                       |
| `yarn format` | Prettier write               |
