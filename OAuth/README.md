### OAuth
- Whenever you see the logos:
    - Sign-In With Google+
    - Login With Facebook
You Should Know That the Web App is using OAuth to authenticate users on its system

#### OAuth Workflow
1. I Sign Into The Platform 
2. My browser makes a request to the server to access a specific path
3. The server responds with a Yes/No Response depending on the credentials
4. If The Credentials are correct I am granted access
5. Else I am told to create a new user
6. When I create/sign in as a user it queries the db
7. A unique cookie based session is created
8. The browser stores the cookie
9. I decrypt the encrypted information stored inside the cookie to retrieve the user data

#### Dependencies I will use
- Express to create My Web App
- EJS For the templating engines

#### Authentication Routes
- localhost:3000/auth/google
- localhost:3000/auth/facebook
- localhost:3000/auth/github
- localhost:3000/auth/login


#### Any Authentication Type is Called A Strategy in PassportJS Library

#### How To Install Passport
```bash
npm install passport
```

#### How To Install Google OAuth
```bash
npm install passport-google-oauth20
```

- To be able to use google OAuth in your application You must register your app with google

- We do not want to store our credentials in the file here within the config folder inside the passport-setup.js
- Instead I create a file within the config folder called keys which I DO NOT COMMIT TO the repository instead I
- store it on my local machine
- I add the file I do not want to be uploaded to my .gitignore file so that it is not tracked in my case it would be the keys file

## The Big Picture
![Image 1](https://user-images.githubusercontent.com/31806568/112837803-3c876d80-9094-11eb-961f-111743195bff.png)
