import { Categoria, Gasto, ListaGastosPorCategoria } from "./classes.js";
import { atualizarInterface, obterElemento } from "./utils.js";

// Instanciar as categorias
const gastosPorCategoria = new ListaGastosPorCategoria(
  new Categoria("Aluguel"),
  new Categoria("Alimentação"),
  new Categoria("Estudos"),
  new Categoria("Transporte"),
  new Categoria("Cuidados Pessoais"),
  new Categoria("Investimentos")
);

// Manipulação de formulário
const form = document.getElementById("gasto-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = document.getElementById("valor").value;
  const categoria = document.getElementById("categoria").value;

  if (!descricao || !valor || !categoria) {
    alert("Preencha todos os campos!");
    return;
  }

  const novoGasto = new Gasto(descricao, valor);
  gastosPorCategoria.adicionarGasto(categoria, novoGasto);

  form.reset();
  atualizarInterface(gastosPorCategoria);
});

