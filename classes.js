export class Categoria {
  constructor(nome) {
    this.nome = nome;
    this.gastos = [];
  }

  adicionarGasto(gasto) {
    this.gastos.push(gasto);
  }

  total() {
    return this.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }
}

export class Gasto {
  constructor(descricao, valor, data = new Date().toLocaleDateString("pt-BR")) {
    this.descricao = descricao;
    this.valor = parseFloat(valor);
    this.data = data;
  }
}

export class ListaGastosPorCategoria {
  constructor(...categorias) {
    this.categorias = categorias;
  }

  adicionarGasto(nomeCategoria, gasto) {
    const categoria = this.categorias.find(c => c.nome === nomeCategoria);
    if (categoria) {
      categoria.adicionarGasto(gasto);
    }
  }

  getTotalGeral() {
    return this.categorias.reduce((acc, categoria) => acc + categoria.total(), 0);
  }
}

