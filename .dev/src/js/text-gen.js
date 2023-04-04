const dados = require("./dados")

const diaAtual = new Date().getDay() + 1
const versiculoDoDia = dados[diaAtual - 1]

if (versiculoDoDia) {
	const mensagemEls = document.querySelectorAll(".new-mensagem")
	const reflexaoEls = document.querySelectorAll(".new-reflexao-sub")

	mensagemEls.forEach(function (mensagemEl) {
		mensagemEl.textContent = versiculoDoDia.mensagem
	})

	reflexaoEls.forEach(function (reflexaoEl) {
		reflexaoEl.textContent = versiculoDoDia.versiculo
	})
}
