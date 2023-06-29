const { Telegraf } = require("telegraf");
const TOKEN = "6035213350:AAH5jH1vSXFOvifjG44rFvRHkP95q23uqCs";
const bot = new Telegraf(TOKEN);

const web_link = "https://cute-baklava-201d33.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome!", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();