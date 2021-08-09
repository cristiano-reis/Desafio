"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ContatoController_1 = __importDefault(require("../controllers/ContatoController"));
var sessaoMiddleware_1 = __importDefault(require("../middleware/sessaoMiddleware"));
var contatoRouter = express_1.Router();
contatoRouter.use(sessaoMiddleware_1.default);
contatoRouter.get('/', ContatoController_1.default.buscarTodosContatos);
contatoRouter.post('/', ContatoController_1.default.cadastar);
exports.default = contatoRouter;
