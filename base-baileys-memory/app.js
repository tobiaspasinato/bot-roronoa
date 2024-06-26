//import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/mock";
import flowPrincipal from "./flows/flowBienvenida.js";
import flowOpcion1 from "./flows/flowOpcion1.js";
import flowOpcion2 from "./flows/flowOpcion2.js";
import flowOpcion3 from "./flows/flowOpcion3.js";


const GLOBAL_STATE = [];
export default function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const main = async () => {
const adapterDB = new MockAdapter();
const adapterFlow = bot.createFlow([
    flowPrincipal,
    flowOpcion1,
    flowOpcion2,
    flowOpcion3,
]);
const adapterProvider = bot.createProvider(BaileysProvider);

bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
});
QRPortalWeb();
};

main();