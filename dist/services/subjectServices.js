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
exports.getSubject = exports.updateSubject = exports.destroySubject = exports.createSubject = exports.getSubjects = void 0;
const { Subjects } = require('../db/models');
const validateRequestResult = (result) => {
    if (result !== null) {
        return { status: 200, data: result };
    }
    return { status: 400, data: { message: 'Error' } };
};
const getSubjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const subjects = yield Subjects.findAll();
    return validateRequestResult(subjects);
});
exports.getSubjects = getSubjects;
const createSubject = (subject) => __awaiter(void 0, void 0, void 0, function* () {
    const newSubject = yield Subjects.create(subject);
    return validateRequestResult(newSubject);
});
exports.createSubject = createSubject;
const destroySubject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const excludeSubject = yield Subjects.destroy({ where: { id } });
    if (excludeSubject !== null) {
        return { status: 200 };
    }
    return { status: 400 };
});
exports.destroySubject = destroySubject;
const updateSubject = (id, subject) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedSubject = yield Subjects.update(subject, { where: { id } });
    return validateRequestResult(updatedSubject);
});
exports.updateSubject = updateSubject;
const getSubject = (subjectId) => __awaiter(void 0, void 0, void 0, function* () {
    const subjects = yield Subjects.findByPk(subjectId);
    return validateRequestResult(subjects);
});
exports.getSubject = getSubject;
