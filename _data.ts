const owner = "scarf005"
const repo = {
  site: {
    name: "JSONT",
    url: `https://github.com/${owner}/JSONT`,
  },
  owner: {
    name: owner,
    url: `https://github.com/${owner}`,
  },
}

declare global {
  namespace Lume {
    interface Data {
      repo: typeof repo
    }
  }
}

export { repo }
