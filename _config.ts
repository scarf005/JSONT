import lume from "lume/mod.ts"

import jsx from "lume/plugins/jsx.ts"
import relative_urls from "lume/plugins/relative_urls.ts"

import shiki from "https://deno.land/x/lume_shiki/mod.ts"

const site = lume()

site
  .copy("style.css")
  .ignore("README.md")
  .data("layout", "layout.tsx")

site
  .use(jsx())
  .use(relative_urls())

const theme = "material-theme-lighter"

site
  .use(
    shiki({
      highlighter: {
        langs: ["jsonc"],
        themes: [theme],
      },
      theme,
    }),
  )

export default site
