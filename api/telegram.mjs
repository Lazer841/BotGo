import { start, createRouter } from "telebot-vercel";

const bot = createRouter();

// Блок с кнопками и изображениями
bot.command("start", (ctx) => {
  const keyboard = [
    [
      { text: "Страница 1", callback_data: "page1" },
      { text: "Страница 2", callback_data: "page2" },
      { text: "Страница 3", callback_data: "page3" },
    ],
  ];

  const replyMarkup = {
    inline_keyboard: keyboard,
  };

  const message = {
    text: "Выберите страницу:",
    reply_markup: replyMarkup,
  };

  ctx.reply(message);
});

// Обработчик нажатий на кнопки
bot.callbackQuery(/page\d/, (ctx) => {
  const page = ctx.callbackQuery.data;

  let image, text;
  if (page === "page1") {
    image = "https://example.com/image1.jpg";
    text = "Текст для страницы 1";
  } else if (page === "page2") {
    image = "https://example.com/image2.jpg";
    text = "Текст для страницы 2";
  } else if (page === "page3") {
    image = "https://example.com/image3.jpg";
    text = "Текст для страницы 3";
  }

  const message = {
    text: text,
    photo: image,
  };

  ctx.reply(message);
});

export default start({ bot });
