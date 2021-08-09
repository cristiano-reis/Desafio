"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function sessaoMiddleware(request, reponse, next) {
    var authorization = request.headers.authorization;
    if (!authorization) {
        return reponse.status(401).json({
            messagem: 'Não Autorizado!',
        });
    }
    var token = authorization.replace('Bearer', '').trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, process.env.APP_SECRET);
        var id = data.id;
        request.userID = id;
        return next();
    }
    catch (err) {
        if (err.message === 'invalid signature') {
            return reponse.status(404).json({
                messagem: 'Não Autorizado!',
            });
        }
        if (err.message === 'jwt expired') {
            return reponse.status(401).json({
                messagem: 'Sessão inválida',
            });
        }
        return reponse.status(401).json({
            messagem: 'Não Autorizado!',
        });
    }
}
exports.default = sessaoMiddleware;
