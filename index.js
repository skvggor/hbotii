const hangoutsBot = require('hangouts-bot')

const user = process.env.HANGOUTS_USER
const password = process.env.HANGOUTS_PASSWORD

const bot = new hangoutsBot(user, password)

function onOnline() {
	console.log('online')
}

function onMessage(from, message) {
	//  marckfree@gmail.com
	// const marcker = '0b1xmm5976r0k266dub553id64@public.talk.google.com/lcsw_hangouts_135E5474'

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

	let helpOccurrences = 0
	let greetingsOccurrences = 0
	let offensesAndOthersOccurrences = 0

	message = message.toLowerCase();

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

	// horrible I knows... TODO: Refact, refact and refact
	if (greetingsOccurrences > 0) bot.sendMessage(from, greetingsAnswers[Math.floor(Math.random() * greetingsAnswers.length)])
	if (offensesAndOthersOccurrences > 0) bot.sendMessage(from, offensesAndOthersAnswers[Math.floor(Math.random() * offensesAndOthersAnswers.length)])
	if (helpOccurrences > 0) bot.sendMessage(from, helpAnswers[Math.floor(Math.random() * helpAnswers.length)])
}

bot.on('online', onOnline)
bot.on('message', onMessage)
