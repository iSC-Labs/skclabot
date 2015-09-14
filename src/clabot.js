var app = require('clabot').createApp({
  getContractors: function(callback){ callback(['list','of','contributors'])},
  token: process.env.GITHUB_TOKEN,
  templateData: {
    link: '$http://suriyaakudoisc.github.com/skclabot/individual.html',
    maintainer: '$SuriyaaKudoIsc'
  },
  secrets: {
    '$repoowner': {
      '$sandbox': process.env.HUB_SECRET
    }
  }
});

port = process.env.PORT || 1337;

app.listen(port);
console.log("Listening on " + port);
