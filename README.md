# Headless CMS Backend

This repository contains a custom headless CMS backend built with Node.js, Express, and MongoDB. It provides flexible API endpoints for managing content types with customizable fields, similar to Advanced Custom Fields (ACF).

## Features
- Dynamic content types with custom fields
- CRUD API endpoints for content management
- MongoDB connection via Mongoose
- CORS-enabled for consumption by any frontend (React/Next.js, etc.)
- Environment-based configuration with `.env` file
- Ready for deployment on Railway
- Compatible with frontends deployed on Netlify

## Getting Started

1. Clone the repository and install dependencies:

```
npm install
```

2. Create a `.env` file based on `.env.example` and set your MongoDB connection string and port.

3. Run the development server:

```
npm run dev
```

The API will be available at `http://localhost:5000/api/content`.

## Deployment

This project includes a `Dockerfile` and `Procfile` for deployment on Railway. To deploy:

1. Create a new project on Railway and link this repository.
2. Add the `MONGO_URI` environment variable in the Railway dashboard.
3. Deploy the project; Railway will build the Dockerfile and start the server.

## API Endpoints

- `GET /api/content/:type` – List all content items of a type.
- `GET /api/content/:type/:slug` – Get a single content item by slug.
- `POST /api/content` – Create a new content item.
- `PUT /api/content/:slug` – Update an existing content item.

## License

This project is provided without warranty; you can adapt it for your needs.
