'use strict'

const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const hangoutsBot = require('hangouts-bot')
const apiAi = require('apiai')
const uuidv4 = require('uuid/v4')

const user = process.env.HANGOUTS_USER
const password = process.env.HANGOUTS_PASSWORD
const dialogFlow = apiAi(process.env.DIALOGFLOW_ACCESSTOKEN)

const bot = new hangoutsBot(user, password)

// serving
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.listen(port)

function onOnline() {
	console.log('online')
}

function onMessage(from, message) {
	const options = { sessionId: uuidv4() }
	const request = dialogFlow.textRequest(message, options)

	request.on('response', response => bot.sendMessage(from, response.result.fulfillment.speech))
	request.on('error', error => console.error(error))
	request.end()
}

bot.on('online', onOnline)
bot.on('message', onMessage)
