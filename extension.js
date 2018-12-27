const vscode = require('vscode');
const getJson = require('./src/getJson.js');


function activate(context) {

	// console.log('Congratulations, your extension "json" is now active!');

	// let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
	// vscode.window.showInformationMessage('Hello World!');
	// });

	// context.subscriptions.push(disposable);
	new getJson()
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}