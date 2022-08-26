"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionValidate = exports.nameValidate = void 0;
const subjectErrors_1 = __importDefault(require("./errors/subjectErrors"));
const nameValidate = (req, res, next) => {
    const { name } = req.body;
    if (!name)
        return res.status(404).json(subjectErrors_1.default.nameError);
    if (name.length === 0)
        return res.status(404).json(subjectErrors_1.default.nameError);
    return next();
};
exports.nameValidate = nameValidate;
const descriptionValidate = (req, res, next) => {
    const { description } = req.body;
    if (!description)
        return res.status(404).json(subjectErrors_1.default.descriptionError);
    if (description.length === 0)
        return res.status(404).json(subjectErrors_1.default.descriptionError);
    return next();
};
exports.descriptionValidate = descriptionValidate;
