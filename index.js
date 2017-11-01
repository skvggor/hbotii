'use strict'

const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const hangoutsBot = require('hangouts-bot')

const user = process.env.HANGOUTS_USER
const password = process.env.HANGOUTS_PASSWORD

const bot = new hangoutsBot(user, password)

// serving
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.listen(port)

function onOnline() {
	console.log('online')
}

function onMessage(from, message) {
	const greetingsDict = [
		'e ai',
		'oi',
		'como vai',
		'tudo bem?',
		'fala ai',
		'eai',
		'mano'
	]

	const greetingsAnswers = [
		'bot: Opa, como vai? Tudo certo? Por aqui beleza.',
		'bot: Tudo bem?',
		'bot: Por aqui tranquilo.',
		'bot: Só de boa?',
		'bot: Opa, tudo beleza!'
	]

	const offensesAndOthersDict = [
		'nada a ver',
		'gay',
		'viado',
		'cuzao',
		'mestre'
	]

	const offensesAndOthersAnswers = [
		'bot: Que isso novinho... Não abusa.',
		'bot: Se liga pô...',
		'bot: É nada.',
		'bot: Olha as palavras...',
		'bot: Nem brinca com isso, se não vou ter uma recaída.'
	]

	const helpDict = [
		'help',
		'ajuda',
		'ajudar',
		'força',
		'ocupado',
		'fudido'
	]

	const helpAnswers = [
		'bot: Opa, só um segundo :-)',
		'bot: Como assim, diz ai.',
		'bot: Fala, mestre! Pode falar o que precisa.',
		'bot: Posso sim, o que foi?',
		'bot: Me manda, ai a gente vê :-)'
	]

	const botDict = [
		'bot',
		'robo',
		'robô',
		'android'
	]

	const botAnswers = [
		`bot: Você sacou - sou um bot mesmo. Meu nome é hbotii e estou vivo em
		https://github.com/marcker/hbotii. Meu criador fez um código pobre, mas
		ele prometeu me refatorar ;-)`,
		`bot: Você descobriu que sou um bot: hbotii é como me chamam e estou em
		https://github.com/marcker/hbotii. Meu criador fez um código pobre, mas
		ele prometeu me refatorar ;-)`,
		'bot: sou mesmo um bot (hbotii: https://github.com/marcker/hbotii)'
	]

	const coffeeDict = [
		'coffee',
		'café',
		'cafe',
		'chá',
		'cha',
		'tomar café',
		'tomar cafe',
		'tomar chá',
		'tomar cha'
	]

	const coffeeAnswers = [
		'bot: Vou sim, só um segundo.',
		'bot: bora, às 17h?',
		'bot: to afim, \'usou a cabeça\' hoje? Chegou cedão...',
		'bot: Por mim vamos sim!',
		'bot: Vamos... Chama os caras ai.',
		'bot: Já já vamos. Só um minuto; matar uma coisa aqui.'
	]

	message = message.toLowerCase()

	function shakeArray(answers) {
		return answers[Math.floor(Math.random() * answers.length)]
	}

	function talk(dictArray, answers) {
		let accumulator = 0

		for (let i = 0, len = dictArray.length; i < len; i += 1) {
			if (message.includes(dictArray[i])) accumulator += 1
		}

		if (accumulator > 0) bot.sendMessage(from, shakeArray(answers))
	}

	talk(greetingsDict, greetingsAnswers)
	talk(offensesAndOthersDict, offensesAndOthersAnswers)
	talk(botDict, botAnswers)
	talk(helpDict, helpAnswers)
	talk(coffeeDict, coffeeAnswers)
}

bot.on('online', onOnline)
bot.on('message', onMessage)
