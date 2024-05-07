import bot from "@bot-whatsapp/bot";
import delay from "../app";
import flowOpcion1 from "./flowOpcion1";
import flowOpcion2 from "./flowOpcion2";

const flowPrincipal = bot.addKeyword('bot').addAnswer(
    [
        '1️⃣ Si sabes que hacen y como lo hacen envie "1".',
        '2️⃣ Si sabes que hacen pero no sabes como lo hacen envie "2".',
        '3️⃣ Si no sabes que hacen y tampoco sabes como lo hacen envie "3".',
        '0️⃣ Para salir.',
    ],
    {capture : true, delay : 1000, media : "https://i.ibb.co/FzkyrXY/Whatsapp-cover-1.webp"},
    async (ctx, { gotoFlow, endFlow }) => {
        if(ctx.body == 1){
            return await gotoFlow(flowOpcion1);
        }
        else if(ctx.body == 2){
            return await gotoFlow(flowOpcion2);
        }
        else if(ctx.body == 3){
            return await gotoFlow();
        }
        else if(ctx.body == 0){
            return await endFlow({body : '👋Nos vemos pronto!'});
        }
        else{
            return await endFlow({body : 'ERROR!!! No tengo este comando'});
        }
    }
)
export default flowPrincipal;