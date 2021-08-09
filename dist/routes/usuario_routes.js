"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
var sessaoMiddleware_1 = __importDefault(require("../middleware/sessaoMiddleware"));
var usuarioRouter = express_1.Router();
usuarioRouter.post('/', UsuarioController_1.default.cadastrarUsuario);
usuarioRouter.use(sessaoMiddleware_1.default);
usuarioRouter.get('/index', UsuarioController_1.default.index);
usuarioRouter.get('/', UsuarioController_1.default.buscarUsuarios);
usuarioRouter.get('/:id', UsuarioController_1.default.buscarContatoPorUsuario);
exports.default = usuarioRouter;
