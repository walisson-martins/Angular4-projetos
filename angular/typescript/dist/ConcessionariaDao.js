"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "tb-concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("logica de inserir");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("logica de atualizar");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("logica de remover");
        return new ConcessionariaDao();
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("logica de selecionar");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function (id) {
        console.log("logica selectr");
        return [new Concessionaria_1.default("", [])];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
