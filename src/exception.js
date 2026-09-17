const fs = require('fs')

const main = () => {
  const argsPath = process.env["roberty-args-file-path"]

  const args = fs.readFileSync(argsPath);

  console.log(JSON.stringify(args, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
});