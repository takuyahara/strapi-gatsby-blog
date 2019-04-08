const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const targetDir = [
  path.resolve(__dirname, "cms"),
  path.resolve(__dirname, "gatsby"),
];

let gitignoreSrc = ["node_modules/"];
targetDir.forEach(dir => {
  gitignoreSrc = gitignoreSrc.concat(
    fs.readFileSync(`${dir}/.gitignore`).toString().split("\n")
      .filter(line => line.substr(0, 1) !== "" && line.substr(0, 1) !== "#")
      .map(line => `${dir}/${line}`)
  );
});
fs.writeFileSync(".gitignore", gitignoreSrc.join("\n"));

exec(`git rm ${gitignoreSrc.join(" ")} -fr`);
exec(`git add .gitignore`);
