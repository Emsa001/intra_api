# Intra API

## Introduction
Intra API is a Node.js application that interacts with the 42 API to fetch user data and perform various other API requests. This project is designed to demonstrate how to make authenticated requests to the 42 API using OAuth2 client credentials.


![Logo](https://socialify.git.ci/Emsa001/intra_api/image?font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Auto)


## Installation
Clone the project and the necessary dependencies:

```bash
git clone https://github.com/Emsa001/intra_api.git
cd ./intra_api
npm install
```

## Configuration
Create a .env file in the root of your project and add the following environment variables:

```
INTRA_UID=your_intra_client_id
INTRA_SECRET=your_intra_client_secret
```

## Usage
To start the application, use the following command:

```bash
npm start
```

## Example
Here's an example of how to use the Intra API:

```typescript
import "dotenv/config";
import IntraRequest from "./intra";

const request = new IntraRequest(null);
const user = await request.get(`/v2/users/escura`, {});

console.log(user);
```

## Features
- Make GET, POST requests to the 42 API
- Automatically handles OAuth2 token retrieval and refresh
- Configurable through environment variables

## Dependencies
- axios: ^1.6.8
- dotenv: ^16.4.5

## Authors

- [@emsa001](https://www.github.com/emsa001)


