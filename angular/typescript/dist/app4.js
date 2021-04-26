"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ConcessionariaDao from "./ConcessionariaDao";
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var dao_1 = require("./dao");
// import PessoaDao from "./PessoaDao";
var Pessoa_1 = __importDefault(require("./Pessoa"));
// let dao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default("", []);
var pessoa = new Pessoa_1.default("", "");
var dao3 = new dao_1.Dao();
// let dao2: PessoaDao = new PessoaDao();
dao3.inserir(concessionaria);
