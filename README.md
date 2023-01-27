# CS50 WEB PROGRAMMING FINAL PROJECT: SQUAD ASSEMBLE
Squad Assemble is a fun Social Website. In this Project I have used Django and Django-Rest-Framework for Backend and React For Frontend.

### Demo of this site available here [Squad Demo](https://squad.com)


## Main idea
I created a collaborative web application to socialize. Everyone can create a post and everyone can start a discussion and/or like that post. The main components are:

* Dashboard page
* Login/Logout/Register
* An individual profile page for each user
* Profiles page in which you can access all of the existing profiles
* A page to create new posts
* Posts page in which there are listed all of the different posts and discussions


## Distinctiveness and Complexity
The page is not similar to anything we have already created. It's frontend is completely programmed using ReactJS.

In terms of complexity, I used Django with more than one model and ReactJS in the frontend. 
Moreover, all of the web application is responsive to different screen sizes.


## Frontend( React )

#### To install dependency
```
npm install
```

#### To start the server
```
npm start
```

#### For Production Build
```
npm run build
```

## Backend( Django )

#### Installing requirements
To install requirements type
```
pip install -r requirements.txt
```

To migrate the database open terminal in project directory and type
```
python manage.py makemigrations
python manage.py migrate
```

To run the program in local server use the following command
```
python manage.py runserver
```

Server will be available at `http://127.0.0.1:8000` in your browser



