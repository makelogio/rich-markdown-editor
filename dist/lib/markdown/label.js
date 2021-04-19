"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_it_container_1 = __importDefault(require("markdown-it-container"));
function label(md) {
    return markdown_it_container_1.default(md, "label", {
        marker: "#",
        validate: () => true,
        render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
                return `<span class="label">\n`;
            }
            else {
                return "</span>\n";
            }
        },
    });
}
exports.default = label;
//# sourceMappingURL=label.js.map