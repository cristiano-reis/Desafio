"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SessaoController_1 = __importDefault(require("../controllers/SessaoController"));
var sessaoRouter = express_1.Router();
sessaoRouter.post('/', SessaoController_1.default.Autenticacao);
exports.default = sessaoRouter;
