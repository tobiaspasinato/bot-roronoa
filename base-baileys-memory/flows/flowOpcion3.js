import bot from "@bot-whatsapp/bot";

const flowOpcion3 = bot.addKeyword("bot").addAction(
    async(ctx, { endFlow }) => {
        let link1 = 'asd';
        let link2 = 'https://calendly.com/0800_web/';
        return endFlow({body : `VSL Informativo : ${link1}\n📌 Calendly : ${link2}\nTe esperamos ver nuevamente en 0800web.`});
    }
)
export default flowOpcion3;