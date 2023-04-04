const valorMinimo = 100
const valorMaximo = 10000
const posicaoInicialSinalizador = 20 // Adicionado para considerar a posição inicial do sinalizador
let arrastando = false

const sinalizador = document.getElementById("sinalizador")
sinalizador.addEventListener("mousedown", iniciarArrasto)

function iniciarArrasto(event) {
	event.preventDefault()
	arrastando = true
	document.addEventListener("mousemove", atualizarValor)
	document.addEventListener("mouseup", pararArrasto)
}

function pararArrasto() {
	arrastando = false
	document.removeEventListener("mousemove", atualizarValor)
	document.removeEventListener("mouseup", pararArrasto)
}

function atualizarValor(event) {
	if (!arrastando) return

	const container = document.getElementById("container")
	const barra = document.getElementById("barra")
	const sinalizador = document.getElementById("sinalizador")
	const valor = document.getElementById("valor")
	const mensagem = document.getElementById("mensagem")

	const posX = event.clientX - container.getBoundingClientRect().left - posicaoInicialSinalizador
	const larguraContainer = container.clientWidth - posicaoInicialSinalizador
	const larguraSinalizador = sinalizador.clientWidth
	let porcentagem = Math.round((posX / larguraContainer) * 100)

	porcentagem = Math.min(Math.max(porcentagem, 0), 100)

	barra.style.width = porcentagem + "%"
	sinalizador.style.left = posicaoInicialSinalizador + (porcentagem * (larguraContainer - larguraSinalizador)) / 100 + "px"
	const valorAtual = Math.round(((valorMaximo - valorMinimo) * porcentagem) / 100) + valorMinimo

	if (event.clientX - container.getBoundingClientRect().left < posicaoInicialSinalizador) {
		mensagem.textContent = "O valor mínimo é R$ " + valorMinimo
	} else {
		mensagem.textContent = ""
	}

	valor.value = Math.max(valorAtual, valorMinimo)
}

function atualizarBarra() {
	const container = document.getElementById("container")
	const barra = document.getElementById("barra")
	const sinalizador = document.getElementById("sinalizador")
	const valor = document.getElementById("valor")
	const mensagem = document.getElementById("mensagem")

	let valorAtual = parseInt(valor.value)
	if (valorAtual < valorMinimo) {
		mensagem.textContent = "O valor mínimo é R$ " + valorMinimo
		valor.value = valorMinimo
		valorAtual = valorMinimo
	} else {
		mensagem.textContent = ""
	}

	const larguraContainer = container.clientWidth - posicaoInicialSinalizador
	const porcentagem = Math.round(((valorAtual - valorMinimo) / (valorMaximo - valorMinimo)) * 100)
	barra.style.width = porcentagem + "%"
	sinalizador.style.left = posicaoInicialSinalizador + (porcentagem * (larguraContainer - sinalizador.clientWidth)) / 100 + "px"
}

const valor = document.getElementById("valor")
valor.addEventListener("input", atualizarBarra)

const labels = document.querySelectorAll(".simulador__form--input label")
labels.forEach((label) => {
	const input = label.querySelector("input")
	label.addEventListener("click", () => {
		input.checked = true
		input.dispatchEvent(new Event("input"))
	})
})
