export default (
  { title, children, repo: { site, owner }, comp }: Lume.Data,
  _helpers: Lume.Helpers,
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-expect-error */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {comp.Hero()}
        <main>
          {children}
        </main>
        <footer>
          <a href={site.url}>{site.name}</a> is maintained by <a href={owner.url}>{owner.name}</a>.
        </footer>
      </body>
    </html>
  </>
)
