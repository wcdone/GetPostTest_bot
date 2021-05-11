const {Telegraf, session ,Scenes:{BaseScene, Stage}} = require('telegraf');

const request = require('request');

const getScene = new Scenes.BaseScene('getScene');

getScene.enter(ctx => ctx.reply('What is url?'));

getScene.leave(ctx =>
    {
    if(!ctx.session.url)
    {   
        ctx.reply('You neet set url');
    }
    else
    {
        request(
            'http://example.com/api',
            (err, response, body) => {
              if (err) return res.status(500).send({ message: err })
        
              return res.send(body)
            }
          )
    }


    }
    );

module.exports = getScene;