const code = `\
{ "JSONT": "JSON × Trailing Commas",
  "extends": "JSON with Comments",
  /* JSONT Specification */ }`

export default () => (
  <div class="hero">
    <div class="json-display">
      <pre><code class="language-jsonc">{code}</code></pre>
    </div>
  </div>
)
