"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contato_routes_1 = __importDefault(require("./contato_routes"));
var usuario_routes_1 = __importDefault(require("./usuario_routes"));
var sessao_routes_1 = __importDefault(require("./sessao_routes"));
var index_routes_1 = __importDefault(require("./index_routes"));
var routes = express_1.Router();
routes.use('/index', index_routes_1.default);
routes.use('/usuario', usuario_routes_1.default);
routes.use('/contato', contato_routes_1.default);
routes.use('/sessao', sessao_routes_1.default);
exports.default = routes;
