# js-dev-env-demo-api
API to return mock json data

## How to deploy
1. Push to master
2. Run the following command
    git push heroku master

### How to hook up with heroku
1. Login to heroku
    heroku login
2. Create an app
    heroku create
    -sample output : https://pacific-badlands-91339.herokuapp.com/
3. Hook up an app with git
    heroku git:remote -a {heroku app name}
    -sample : heroku git:remote -a pacific-badlands-91339
