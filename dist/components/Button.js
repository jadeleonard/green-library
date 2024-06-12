"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const { primary, secondary, buttonDefault, link } = {
    primary: 'primary', // Replace with actual class names from your CSS
    secondary: 'secondary',
    buttonDefault: 'button',
    link: 'link'
};
const style = (0, clsx_1.default)(primary, secondary, buttonDefault, link);
function Button({ children }) {
    return (react_1.default.createElement("button", { className: style }, children));
}
exports.Button = Button;
