const TeleBot = require('telebot');
const axios = require("axios");
//
const TOKEN = "token_generado_por_botfarther_telegram_bot";

const bot = new TeleBot({
    token: TOKEN,
});

bot.on(["/start", "/hello"], (msg) => {
    console.log("msg ", msg);
    bot.sendMessage(msg.from.id, `Hello ${msg.chat.username}`);
});

bot.on(["text"], (msg) => {
    let txt = msg.text;
    let ctx;
    let menu = `
    =============================\nBIENVENIDO AL SUPERMARKET\n=============================\n- 1) Listar Productos\n- 2) Listar Ofertas\n=============================`;

    let item;
    let products = "";
    let len;
    let i = 0;
    let title;
    let space;

    axios.get("https://fakestoreapi.com/products").then(res => {
        item = res.data;
        len = item.length;
        for (; i < len; i++) {
            if (i == 4 || i == 9 || i == 14) {
                space = "\n";
            } else {
                space = "";
            }
            title = (item[i].title.length > 20) ? item[i].title.split("").slice(0, 20).join("") : item[i].title;
            products += `ID ${item[i].id}) $${item[i].price} - ${title}\n${space}`;
        }
        products += "\n 0) volver al menú";

        if (txt.toLowerCase() == "m" || txt == 0) ctx = menu;
        if (txt == 1) ctx = products;
        if (txt == 2) ctx = "option 2";

        console.log("ctx ", ctx)
        bot.sendMessage(msg.from.id, ctx != undefined ? ctx : "---");
    }).catch(err => console.log(err));
});

bot.start();