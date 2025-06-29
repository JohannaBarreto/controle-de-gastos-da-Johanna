// Funções utilitárias

export const obterElemento = (id) => document.getElementById(id);

export const formataMoeda = (valor) =>
  valor.toFixed(2).replace(".", ",");

export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (gastosPorCategoria) => {
  const categorias = gastosPorCategoria.categorias;

  categorias.forEach((categoria) => {
    const elemento = obterElemento(categoria.nome);
    if (elemento) {
      elemento.textContent = `${categoria.nome}: R$ ${formataMoeda(categoria.total())}`;
    }
  });

  const elementoTotal = obterElemento("Total");
  if (elementoTotal) {
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.getTotalGeral())}`;
  }
};

