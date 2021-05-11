const { Telegraf, session,Scenes:{BaseScene, Stage}, Markup } = require("telegraf");
require("dotenv").config();
//require("./stage/default.sj");



//https://dev.to/slkarol/nodejs-1-o7
// Создать бота с полученным ключом
const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU);

// Обработчик начала диалога с ботом
bot.start((ctx) =>
  ctx.reply(
    `Приветствую, ${
       ctx.from.first_name ? ctx.from.first_name : "хороший человек"
    }! Набери /help и увидишь, что я могу.`
  )
);

// Обработчик команды /help
bot.help((ctx) => ctx.reply("Справка в процессе"));

// Обработчик команды /whoami
bot.command("whoami", (ctx) => {
  const { id, username, first_name, last_name } = ctx.from;
  return ctx.replyWithMarkdown(`Кто ты в телеграмме:
*id* : ${id}
*username* : ${username}
*Имя* : ${first_name}
*Фамилия* : ${last_name}
*chatId* : ${ctx.chat.id}`);
});

// Обработчик простого текста
bot.on("text", (ctx) => {
  return ctx.reply(ctx.message.text);
});

// Запуск бота
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))