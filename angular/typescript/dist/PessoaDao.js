"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "";
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("logica de inserir");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("logica de atualizar");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("logica de remover");
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("logica de selecionar");
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionarTodos = function (id) {
        console.log("logica do select all");
        return [new Pessoa_1.default("", "")];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;
