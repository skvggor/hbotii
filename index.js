'use strict'

const hangoutsBot = require('hangouts-bot')

const user = process.env.HANGOUTS_USER
const password = process.env.HANGOUTS_PASSWORD

const bot = new hangoutsBot(user, password)

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
		'Opa, como vai? Tudo certo? Por aqui beleza.',
		'Tudo bem?',
		'Por aqui tranquilo.',
		'Só de boa?',
		'Opa, tudo beleza!'
	]

	const offensesAndOthersDict = [
		'nada a ver',
		'gay',
		'viado',
		'cuzao',
		'mestre'
	]

	const offensesAndOthersAnswers = [
		'Que isso novinho... Não abusa.',
		'Se liga pô...',
		'É nada.',
		'Olha as palavras...',
		'Nem brinca com isso, se não vou ter uma recaída.'
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
		'Opa, só um segundo :-)',
		'Como assim, diz ai.',
		'Fala, mestre! Pode falar o que precisa.',
		'Posso sim, o que foi?',
		'Me manda, ai a gente vê :-)'
	]

	const botDict = [
		'bot',
		'robo',
		'robô',
		'android'
	]

	const botAnswers = [
		`Você sacou - sou um bot mesmo. Meu nome é hbotii e estou vivo em
		https://github.com/marcker/hbotii. Meu criador fez um código pobre, mas
		ele prometeu me refatorar ;-)`,
		`Você descobriu que sou um bot: hbotii é como me chamam e estou em
		https://github.com/marcker/hbotii. Meu criador fez um código pobre, mas
		ele prometeu me refatorar ;-)`,
		'sou mesmo um bot (hbotii: https://github.com/marcker/hbotii)'
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
		'Vou sim, só um segundo.',
		'bora, as 17h?',
		'to afim, \'usou a cabeça\' hoje? Chegou cedão...',
		'Por mim vamos sim!',
		'Vamos... Chama os caras ai.',
		'Já já vamos. Só um minuto; matar uma coisa aqui.'
	]

	let helpOccurrences = 0
	let greetingsOccurrences = 0
	let offensesAndOthersOccurrences = 0
	let botOccurrences = 0
	let coffeeOccurrences = 0

	message = message.toLowerCase()

	// greetings
	for (let i = 0, len = greetingsDict.length; i < len; i += 1) {
		if (message.includes(greetingsDict[i])) greetingsOccurrences += 1
	}

	// offenses and others
	for (let i = 0, len = offensesAndOthersDict.length; i < len; i += 1) {
		if (message.includes(offensesAndOthersDict[i])) offensesAndOthersOccurrences += 1
	}

	// help
	for (let i = 0, len = helpDict.length; i < len; i += 1) {
		if (message.includes(helpDict[i])) helpOccurrences += 1
	}

	// bot
	for (let i = 0, len = botDict.length; i < len; i += 1) {
		if (message.includes(botDict[i])) botOccurrences += 1
	}

	// coffee
	for (let i = 0, len = coffeeDict.length; i < len; i += 1) {
		if (message.includes(coffeeDict[i])) coffeeOccurrences += 1
	}

	// horrible I knows... TODO: Refact, refact and refact
	if (greetingsOccurrences > 0) bot.sendMessage(from, greetingsAnswers[Math.floor(Math.random() * greetingsAnswers.length)])
	if (offensesAndOthersOccurrences > 0) bot.sendMessage(from, offensesAndOthersAnswers[Math.floor(Math.random() * offensesAndOthersAnswers.length)])
	if (helpOccurrences > 0) bot.sendMessage(from, helpAnswers[Math.floor(Math.random() * helpAnswers.length)])
	if (botOccurrences > 0) bot.sendMessage(from, botAnswers[Math.floor(Math.random() * botAnswers.length)])
	if (coffeeOccurrences > 0) bot.sendMessage(from, coffeeAnswers[Math.floor(Math.random() * coffeeAnswers.length)])
}

bot.on('online', onOnline)
bot.on('message', onMessage)
