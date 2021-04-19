import customFence from "markdown-it-container";

export default function label(md): void {
  return customFence(md, "label", {
    marker: "#",
    validate: () => true,
    render: function(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        // opening tag
        return `<span class="label">\n`;
      } else {
        // closing tag
        return "</span>\n";
      }
    },
  });
}
