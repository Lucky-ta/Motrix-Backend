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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubjectsById = exports.editSubject = exports.deleteSubject = exports.postSubject = exports.getAllSubjects = void 0;
const subjectServices_1 = require("../services/subjectServices");
const getAllSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, subjectServices_1.getSubjects)();
        return res.status(response.status).json(response.data);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
exports.getAllSubjects = getAllSubjects;
const postSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const response = yield (0, subjectServices_1.createSubject)(body);
        return res.status(response.status).json(response.data);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
exports.postSubject = postSubject;
const deleteSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const parsedId = Number(id);
        const response = yield (0, subjectServices_1.destroySubject)(parsedId);
        return res.status(response.status).end();
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
exports.deleteSubject = deleteSubject;
const editSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const parsedId = Number(id);
        const { body } = req;
        const response = yield (0, subjectServices_1.updateSubject)(parsedId, body);
        return res.status(response.status).json(response.data);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
exports.editSubject = editSubject;
const getSubjectsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const parsedId = Number(id);
        const response = yield (0, subjectServices_1.getSubject)(parsedId);
        return res.status(response.status).json(response.data);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
exports.getSubjectsById = getSubjectsById;
