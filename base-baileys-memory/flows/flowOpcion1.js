import bot from "@bot-whatsapp/bot";

const flowOpcion1 = bot.addKeyword("bot").addAction(
    async(ctx, { endFlow }) => {
        let link1 = 'https://api.whatsapp.com/send?phone=5215639534196&text=hola';
        let link2 = 'https://calendly.com/0800_web/';
        return endFlow({body : `🤖 Ejemplos de bots : ${link1}\n📌 Calendly : ${link2}\nTe esperamos ver nuevamente en 0800web.`});
    }
)
export default flowOpcion1;