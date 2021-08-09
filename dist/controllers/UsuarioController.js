"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
var typeorm_1 = require("typeorm");
var Usuario_1 = __importDefault(require("../models/Usuario"));
var UsuarioRepository_1 = __importDefault(require("../repository/UsuarioRepository"));
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
    }
    UsuarioController.prototype.listarID = function (request, response) {
        return response.json({ userID: request.userID });
    };
    UsuarioController.prototype.buscarContatoPorUsuario = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, existeUsuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.default).find({
                                select: ['nome', 'email', 'senha'],
                                relations: ['contatos'],
                                where: { id: id },
                            })];
                    case 1:
                        existeUsuario = _a.sent();
                        if (!existeUsuario) {
                            return [2 /*return*/, response.status(409).json({
                                    mensagem: 'Usuario não encontrado!',
                                })];
                        }
                        return [2 /*return*/, response.json(existeUsuario)];
                }
            });
        });
    };
    UsuarioController.prototype.buscarUsuarios = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getRepository(Usuario_1.default).find()];
                    case 1:
                        usuarios = _a.sent();
                        return [2 /*return*/, response.json(usuarios)];
                }
            });
        });
    };
    UsuarioController.prototype.cadastrarUsuario = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, _a, nome, email, senha, usuarioExiste, senhaHash, repo, usuario;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = typeorm_1.getRepository(Usuario_1.default);
                        _a = request.body, nome = _a.nome, email = _a.email, senha = _a.senha;
                        return [4 /*yield*/, typeorm_1.getCustomRepository(UsuarioRepository_1.default).BuscarPorEmail(email)];
                    case 1:
                        usuarioExiste = _b.sent();
                        if (usuarioExiste) {
                            return [2 /*return*/, response.status(409).json({
                                    mensagem: 'E-mail já cadastrado!',
                                })];
                        }
                        return [4 /*yield*/, bcryptjs_1.hash(senha, 8)];
                    case 2:
                        senhaHash = _b.sent();
                        repo = repository.create({
                            nome: nome,
                            email: email,
                            senha: senhaHash,
                        });
                        return [4 /*yield*/, repository.save(repo)];
                    case 3:
                        usuario = _b.sent();
                        delete usuario.senha;
                        return [2 /*return*/, response.json(usuario)];
                }
            });
        });
    };
    return UsuarioController;
}());
exports.default = new UsuarioController();
