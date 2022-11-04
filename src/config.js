import dotenv from "dotenv";
dotenv.config();

export default {
    DB_CONNECT: process.env.DB_CONNECT,
};