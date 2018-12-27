const fs = require('fs');
const vscode = require('vscode');

class M {
  constructor() {
    this.init()
  }
  init() {
    this.fileArr = vscode.workspace.textDocuments
    this.filePath = this.fileArr.find(item => (item.languageId === 'json')).fileName
    this.dataGet()
  }
  dataGet() {
    if (fs.existsSync(this.filePath)) {
      fs.readFile(this.filePath, 'utf8', (err, data) => {
        if (err) throw err
        this.data = data
        this.dataHandle()
      })
    }
  }
  dataHandle() {
    let data = this.data.replace(/\/\//g, "__DIVISION__")
    debugger
    // let data = this.data.replace(/\\/g, )
  }
  dataWrite() {
    // fs.writeFile('文件.txt', data, (err) => {
    //   if (err) throw err
    //   console.log('文件已保存')
    // })
  }
}
module.exports = M