// ============================================================
// classes.js — Definição das classes (POO)
// ============================================================

export class Item {
  #id;
  #categoria;
  #valor;

  constructor(categoria, valor) {
    this.#id = crypto.randomUUID();
    this.#categoria = categoria;
    this.#valor = valor;
  }

  get id()        { return this.#id; }
  get categoria() { return this.#categoria; }
  get valor()     { return this.#valor; }

  toJSON() {
    return { id: this.#id, categoria: this.#categoria, valor: this.#valor };
  }
}

// ---------------------------------------------------------------

export class ListaDeCompras {
  #itens = [];

  adicionar(item) {
    if (!(item instanceof Item)) throw new TypeError('Esperado instância de Item');
    this.#itens = [...this.#itens, item];
  }

  remover(id) {
    this.#itens = this.#itens.filter(i => i.id !== id);
  }

  limpar() {
    this.#itens = [];
  }

  get itens() { return [...this.#itens]; }

  // Agrupa por categoria usando reduce()
  get porCategoria() {
    return this.#itens.reduce((acc, item) => {
      const cat = item.categoria;
      if (!acc[cat]) acc[cat] = { categoria: cat, total: 0, itens: [] };
      acc[cat].total  += item.valor;
      acc[cat].itens   = [...acc[cat].itens, item];
      return acc;
    }, {});
  }

  // Total geral usando reduce()
  get total() {
    return this.#itens.reduce((soma, item) => soma + item.valor, 0);
  }

  get tamanho() { return this.#itens.length; }
}