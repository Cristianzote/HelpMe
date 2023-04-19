import app from "../app/app.js";
import message from "./message.js";

const caseEntorno = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            message(`Aplicación lista en el puerto http://localhost:${app.get("PORT")}/`,"danger");
            break;

        case 'develop':
            message(`Aplicación lista en el puerto http://localhost:${app.get("PORT")}/`,"success");
            break;

        case 'qa':
            message(`Aplicación lista en el puerto http://localhost:${app.get("PORT")}/`,"warning");
            break;

        default:
            message(`Aplicación lista en el puerto http://localhost:${app.get("PORT")}/`,"success");
            break;

    }
};

export default caseEntorno;