### BLOG APP

# Roles:
-  ADMIN
    - Login
    - View Articles
    - Block & Activate User
    - Logout

- AUTHOR
    - Registration 
    - Login
    - Add articles
    - View Author's Articles
    - Edit & Delete Articles
    - Logout

- USER
    - Registration
    - Login
    - View Articles
    - Write comments
    - Logout

### STEPS:

1. Generate package.json and update the required fields

2. Create a .env file
    > npm install dotenv

3. Create an express application

4. Connect a database file

5. Create schemas and models
    - UserTypeSchema
        firstName
        lastName
        email(unique)
        password
        role
        profileImageUrl
        isUserActive

    - ArticleSchema
        author
        title
        category
        content
        comments
        isArticleActive

6. Implement APIs

7. Create common API for register, login and logout


* NOTE: xss and csrf are attacks performed.

