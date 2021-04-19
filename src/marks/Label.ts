import { toggleMark } from "prosemirror-commands";
import markInputRule from "../lib/markInputRule";
import Mark from "./Mark";

export default class Label extends Mark {
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
    return [markInputRule(/(?:\#\#)([^*]+)(?:\#\#)$/, type)];
  }

  keys({ type }) {
    return {
      "Mod-l": toggleMark(type),
      "Mod-L": toggleMark(type),
    };
  }

  parseMarkdown() {
    return { mark: "label" };
  }
}
