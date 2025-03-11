import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Gestor_de_opiniones API",
            version: "1.0.0",
            description: "API para gestionar opiniones de usuarios",
            contact: {
                name: "Crhistopher Gomez",
                email: "crhistophergomez2007@gmail.com"
            }
        },
        servers: [
            {
                url: "http://127.0.0.1:3000/facebook/v1"
            }
        ]
    },
    apis: [
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/category/category.routes.js"
    ]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export { swaggerDocs, swaggerUI };