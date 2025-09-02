// КЛАВА страница +1
var messageId = flow.get("mID","memoryOnly");
var reply_markup = JSON.stringify({
      "inline_keyboard": [
         [
           { "text": "1 ", "callback_data": "bruh1", "topic": "Бра" },  
                { "text": "2 ", "callback_data": "s2", "topic": "Бра" },  
                { "text": "3 ", "callback_data": "s3", "topic": "Кухня" },
                { "text": "4 ", "callback_data": "s4" ,"topic": "Столовая" }
            ],            [
                { "text": "БРА 🚦", "callback_data": "svet_bra", "topic": "Бра" },  
                { "text": "СТУЛ 🪑", "callback_data": "kuytj1", "topic": "Кухня" },
                { "text": "СТОЛ 🍹", "callback_data": "s1gdl" ,"topic": "Столовая" }
            ],            [
                { "text": "ВАННА 🛋️", "callback_data": "hjza1", "topic": "Зал" },
                { "text": "РАДУГА 🛏️", "callback_data": "sdh1al", "topic": "Спальня" },
                { "text": "ТУАЛЕТ 🚽", "callback_data": "va1fxgna", "topic": "Ванная" }
            ],
            [
                { "text": "КУХНЯ 🧸", "callback_data": "df1t", "topic": "Детская" },
                { "text": "ХОЛЛ 🚪", "callback_data": "kodg1", "topic": "Коридор" },
                { "text": "БАЛК 🌬️", "callback_data": "rgba1k", "topic": "Балкон" }
            ],
            [
                { "text": "", "callback_data": "prsgdih", "topic": "Прихожая" },
                { "text": " 🧺", "callback_data": "posyytthir", "topic": "Постирочная" },
                { "text": " 📦", "callback_data": "kldgzad", "topic": "Кладовка" },
                { "text": " 🏠", "callback_data": "dzgp1ih", "topic": "Прихожая" }
            ],
            [
                { "text": "🌪", "callback_data": "gardegrob", "topic": "Гардероб" },
                 { "text": 'X' + vent, "callback_data": "p1igzdh", "topic": "Прихожая" },
                { "text": "➖", "callback_data": "kabinegt", "topic": "Кабинет" },
                { "text": "➕", "callback_data": "terravdxsa", "topic": "Терраса" }
            ],            [
                 { "text": "УТРО", "callback_data": "utro", "topic": "Будильник" },
                { "text": "ОКНО 🧺", "callback_data": "okno", "topic": "Постирочная" }
            ],  [
                { "text": "ПРИХ1ЖАЯ 🏠", "callback_data": "p1ih", "topic": "Прихожая" },
                { "text": "ПОСТ1Р 🧺", "callback_data": "pos1dgbir", "topic": "Постирочная" },
                { "text": "КЛАД1ВКА 📦", "callback_data": "kfgbl1d", "topic": "Кладовка" }
            ],  [
                { "text": "ГОСТИ", "callback_data": "garddopkgerob1","topic": "Гардероб" },
                { "text": "OFF", "callback_data": "kabinge1", "topic": "Кабинет" },
                { "text": "OFFall", "callback_data": "terrgxgasa1","topic": "Терраса" }
            ]               
        ],
    });
    
var options = {
    chat_id: msg.payload.chatId,
    reply_markup: reply_markup,
    message_id: messageId
};

msg.payload.type = 'editMessageReplyMarkup';
msg.payload.content = reply_markup;
msg.payload.options = options;

return [msg];

