"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexController_1 = __importDefault(require("../controllers/IndexController"));
var sessaoMiddleware_1 = __importDefault(require("../middleware/sessaoMiddleware"));
var indexRouter = express_1.Router();
indexRouter.use(sessaoMiddleware_1.default);
indexRouter.get('/', IndexController_1.default.index);
exports.default = indexRouter;
