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
			tarifaCheia: 0.83394,
			tarifaPisCofins: 0.0307,
			tarifaDesconto: 0.80324,
			tarifaIluminacao: 20,
			tarifaRede: 50,
			descontoMax: 0.9,
		},
		comercial: {
			tarifaCheia: 0.83394,
			tarifaPisCofins: 0.0307,
			tarifaDesconto: 0.80324,
			tarifaIluminacao: 30,
			tarifaRede: 100,
			descontoMax: 0.85,
		},
	}
	const valorConta = parseFloat(document.querySelector("#valor").value)

	const consumoReal = valorConta - tarifas[tipoConta].tarifaIluminacao
	const consumoKWH =  consumoReal /  tarifas[tipoConta].tarifaCheia
	const valorEnergiaDesconto = consumoKWH - tarifas[tipoConta].tarifaRede
	const valorConsumoDesconto = valorEnergiaDesconto * tarifas[tipoConta].tarifaDesconto * tarifas[tipoConta].descontoMax
	
	const valorPisCofins = tarifas[tipoConta].tarifaPisCofins * valorEnergiaDesconto
	const valorCustoDisponibilidade = tarifas[tipoConta].tarifaRede * tarifas[tipoConta].tarifaCheia

	const valorFinalCusto =  valorConsumoDesconto + valorPisCofins + valorCustoDisponibilidade + tarifas[tipoConta].tarifaIluminacao
	const valorFinalDescontoMensal = valorConta - valorFinalCusto

	// console.log('valorConta', valorConta)
	// console.log("consumoReal", consumoReal)
	// console.log("consumoKWH", consumoKWH)
	// console.log("valorEnergiaDesconto", valorEnergiaDesconto)
	// console.log("valorConsumoDesconto", valorConsumoDesconto)
	// console.log("valorPisCofins", valorPisCofins)
	// console.log("valorCustoDisponibilidade", valorCustoDisponibilidade)
	// console.log(valorFinalCusto)
	// console.log(valorFinalDescontoMensal)

	localStorage.setItem("valorConta", valorConta.toFixed(2))
	localStorage.setItem("valorFinalDescontoMensal", valorFinalDescontoMensal.toFixed(2))
	localStorage.setItem("tipoConta", tipoConta)
}



document.querySelector(".simulador__form").addEventListener("submit", function (event) {
	event.preventDefault()

	calcularDesconto()

	window.location.href = "./typ.html"
})
