// client 中build完之后, popup的index.html引用的js和css的路径是绝对路径,将其转为相对路径
const fs = require('fs')
const path = require('path')

const patchPopFile = () => {
  const pathName = path.join(__dirname, 'popup/index.html')


 const fileStr = fs.readFileSync(pathName, 'utf-8')
 const newStr = fileStr.replace(/\"\/assets/g, '"./assets')

 fs.writeFileSync(pathName, newStr)
}

patchPopFile()