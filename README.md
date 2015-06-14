# [Heroku](https://www.heroku.com/)

> Commands for Heroku

    curl -u "clabotusername" -i https://api.github.com/hub -F "hub.mode=subscribe" -F "hub.topic=https://github.com/:user/:repo/events/pull_request" -F "hub.callback=http://your-clabot.herokuapp.com/notify" -F "hub.secret=supersecretrandomstring"
    
    curl -u "clabotusername" -i https://api.github.com/hub -F "hub.mode=subscribe" -F "hub.topic=https://github.com/:user/:repo/events/issue_comment" -F "hub.callback=http://your-clabot.herokuapp.com/notify" -F "hub.secret=supersecretrandomstring"
