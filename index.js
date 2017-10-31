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
		'bot: bora, as 17h?',
		'bot: to afim, \'usou a cabeça\' hoje? Chegou cedão...',
		'bot: Por mim vamos sim!',
		'bot: Vamos... Chama os caras ai.',
		'bot: Já já vamos. Só um minuto; matar uma coisa aqui.'
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
