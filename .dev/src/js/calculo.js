function mascaraValor(valor) {
	valor = valor.toString().replace(/\D/g, "")
	valor = valor.toString().replace(/(\d)(\d{8})$/, "$1.$2")
	valor = valor.toString().replace(/(\d)(\d{5})$/, "$1.$2")
	valor = valor.toString().replace(/(\d)(\d{2})$/, "$1,$2")
	return valor
}

function calcularDesconto() {
	const tipoConta = document.querySelector('input[name="tipo-de-conta"]:checked').value
	const tarifas = {
		residencial: {
			tarifaCheia: 0.74,
			tarifaPisCofins: 0.04,
			tarifaDesconto: 0.7,
			tarifaIluminacao: 20,
			tarifaRede: 50,
		},
		comercial: {
			tarifaCheia: 0.74,
			tarifaPisCofins: 0.04,
			tarifaDesconto: 0.7,
			tarifaIluminacao: 30,
			tarifaRede: 100,
		},
	}
	const valorConta = parseFloat(document.querySelector("#valor").value)

	const consumoReal = valorConta - tarifas[tipoConta].tarifaIluminacao
	const consumoKWH = consumoReal / tarifas[tipoConta].tarifaCheia
	const valorEnergiaDesconto = consumoKWH - tarifas[tipoConta].tarifaRede
	const valorConsumoDesconto = valorEnergiaDesconto * tarifas[tipoConta].tarifaDesconto
	const valorPisCofins = tarifas[tipoConta].tarifaPisCofins * valorEnergiaDesconto
	const valorCustoDisponibilidade = tarifas[tipoConta].tarifaRede * tarifas[tipoConta].tarifaCheia

	const valorFinalCusto = valorConsumoDesconto - valorPisCofins + valorCustoDisponibilidade
	const valorFinalDescontoMensal = valorConta - valorFinalCusto

	// console.log(valorConta)
	// console.log(consumoReal)
	// console.log(consumoKWH)
	// console.log(valorEnergiaDesconto)
	console.log(valorConsumoDesconto)
	console.log(valorPisCofins)
	console.log(valorCustoDisponibilidade)
	console.log(valorFinalCusto)
	console.log(valorFinalDescontoMensal)

	localStorage.setItem("valorConta", valorConta.toFixed(2))
	localStorage.setItem("valorFinalDescontoMensal", valorFinalDescontoMensal.toFixed(2))
}

document.querySelector(".simulador__form").addEventListener("submit", function (event) {
	event.preventDefault()

	calcularDesconto()

	window.location.href = "./typ.html"
})
