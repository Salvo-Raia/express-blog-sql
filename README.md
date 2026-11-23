![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 48/50: Express Blog SQL

Integrate a MySQL database into the existing Express Blog API to store and retrieve blog posts with persistent data storage.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| express-blog-sql | Express Blog SQL | Exercise | Express, MySQL integration & Database queries | 48/50 |

## Assignment

Extend the previously developed Express Blog API by connecting it to a MySQL database and replacing in-memory data handling with persistent database operations.

#### Milestone 1: Database connection

- Import the provided database into MySQL Workbench.
- Install the **mysql2** package in the Express application.

  ```bash
  npm i mysql2
  ```

- Create a configuration file to establish the database connection.
- Add a `console.log` to the connection logic.
- Start the application and verify that the database connection works without errors.

#### Milestone 2: INDEX - Retrieve all posts

- Update the INDEX API to retrieve the list of posts from the database.
- Return the retrieved posts in JSON format.
- Test the endpoint using Postman and verify that the response is correct.

#### Milestone 3: DESTROY - Delete a post

- Update the DESTROY API to delete a post from the database.
- Test the endpoint using Postman.
- Verify that the request succeeds and returns an HTTP `204 No Content` response.
- Open MySQL Workbench and confirm that the post has actually been deleted.

#### Milestone 4: SHOW - Retrieve a single Post

- Update the SHOW API to retrieve the requested post from the database.
- Return the post in JSON format.
- Test the endpoint using Postman and verify that the response is correct.

#### Bonus challenge

Extend the SHOW API so that each post is returned together with its associated tags.

- Retrieve the tags through the existing relationship between posts and tags in the database.
- Include the associated tags in the JSON response.

## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) 
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) 
![MySQL Workbench](https://img.shields.io/badge/MySQL_Workbench-4479A1?style=flat-square&logo=mysql&logoColor=white)

## What I learned

- Connecting an Express application to a MySQL database.
- Configuring database connections using `mysql2`.
- Retrieving records from a database using SQL queries.
- Implementing database-backed API endpoints.
- Deleting records from a database.
- Returning database results in JSON format.
- Understanding relationships between database tables.
- Retrieving related data using SQL JOIN operations.
- Testing API endpoints and database operations with Postman and MySQL Workbench.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
