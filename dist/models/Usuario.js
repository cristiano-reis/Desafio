"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Contato_1 = __importDefault(require("./Contato"));
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Usuario.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Usuario.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Usuario.prototype, "senha", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Usuario.prototype, "email", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Contato_1.default; }, function (contato) { return contato.usuario; }),
        __metadata("design:type", Array)
    ], Usuario.prototype, "contatos", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'data_criacao' }),
        __metadata("design:type", Date)
    ], Usuario.prototype, "data_criacao", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'data_atualizacao' }),
        __metadata("design:type", Date)
    ], Usuario.prototype, "data_atualizacao", void 0);
    __decorate([
        typeorm_1.Column('time with time zone'),
        __metadata("design:type", Date)
    ], Usuario.prototype, "ultimo_login", void 0);
    Usuario = __decorate([
        typeorm_1.Entity('usuarios')
    ], Usuario);
    return Usuario;
}());
exports.default = Usuario;
