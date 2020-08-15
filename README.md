# dofus-api
An open-source GraphQL API for [Dofus](https://www.dofus.com/en). This API uses the database generated by my (Dofus Scraper)[https://github.com/Cornayy/dofus-scraper].

## Disclaimer
This project is still under development, feel free to contribute.

## Project
This project is using [NestJS](https://nestjs.com/), see their docs for more information about CLI commands.

## Configuration
Create a .env file in the root of your project, a typical .env should look like this. You can also copy the contents of the .env.example file in the root directory.

```
TYPE=mongodb
HOST=localhost
PORT=27017
DB_NAME=dofus-scraper
```
## License

[MIT](LICENSE)
