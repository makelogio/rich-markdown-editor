"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_commands_1 = require("prosemirror-commands");
const markInputRule_1 = __importDefault(require("../lib/markInputRule"));
const Mark_1 = __importDefault(require("./Mark"));
class Label extends Mark_1.default {
    get name() {
        return "label";
    }
    get schema() {
        return {
            parseDOM: [{ tag: "span.label" }],
            toDOM: () => ["span", { class: "label" }],
        };
    }
    get toMarkdown() {
        return {
            open: "#",
            close: "#",
            mixable: true,
            expelEnclosingWhitespace: true,
        };
    }
    inputRules({ type }) {
        return [markInputRule_1.default(/(?:\#)([^*]+)(?:\#)$/, type)];
    }
    keys({ type }) {
        return {
            "Mod-l": prosemirror_commands_1.toggleMark(type),
            "Mod-L": prosemirror_commands_1.toggleMark(type),
        };
    }
    parseMarkdown() {
        return { mark: "label" };
    }
}
exports.default = Label;
//# sourceMappingURL=Label.js.map