// ============================================================
// app.js — Código principal
// ============================================================

import { Item, ListaDeCompras }                           from './classes.js';
import { formatarMoeda, validarEntrada, parsearValor,
         iconeDaCategoria, corDaCategoria,
         calcularPorcentagem }                            from './util.js';

// ── Instância global da lista ────────────────────────────────
const lista = new ListaDeCompras();

// ── Referências ao DOM ───────────────────────────────────────
const form         = document.getElementById('form-compra');
const inputCat     = document.getElementById('categoria');
const inputVal     = document.getElementById('valor');
const btnCalcular  = document.getElementById('btn-calcular');
const btnLimpar    = document.getElementById('btn-limpar');
const erroBox      = document.getElementById('erro-box');
const resultadoSec = document.getElementById('resultado');
const listaGrid    = document.getElementById('lista-categorias');
const totalEl      = document.getElementById('total-geral');
const contadorEl   = document.getElementById('contador');

// ── Renderização ─────────────────────────────────────────────

/**
 * Cria o HTML de um cartão de categoria.
 * Função pura de renderização — não acessa estado externo.
 */
const criarCartaoCategoria = (grupo, total) => {
  const pct   = calcularPorcentagem(grupo.total, total);
  const icone = iconeDaCategoria(grupo.categoria);
  const cor   = corDaCategoria(grupo.categoria);

  const itensHTML = grupo.itens
    .map(item => `
      <div class="item-linha" data-id="${item.id}">
        <span class="item-nome">Lançamento</span>
        <span class="item-valor">${formatarMoeda(item.valor)}</span>
        <button class="btn-remover" data-id="${item.id}" title="Remover">✕</button>
      </div>`)
    .join('');

  return `
    <div class="cartao-categoria" style="--cor-cat: ${cor}">
      <div class="cartao-header">
        <span class="cat-icone">${icone}</span>
        <h3 class="cat-nome">${grupo.categoria}</h3>
        <span class="cat-total">${formatarMoeda(grupo.total)}</span>
      </div>
      <div class="barra-wrap">
        <div class="barra-fill" style="width: ${pct}%"></div>
      </div>
      <span class="barra-pct">${pct}% do total</span>
      <div class="itens-lista">${itensHTML}</div>
    </div>`;
};

/**
 * Re-renderiza toda a seção de resultados.
 */
const renderizar = () => {
  const porCat = lista.porCategoria;
  const total  = lista.total;
  const grupos = Object.values(porCat);

  if (lista.tamanho === 0) {
    resultadoSec.classList.add('oculto');
    return;
  }

  resultadoSec.classList.remove('oculto');

  // map() para gerar os cartões
  listaGrid.innerHTML = grupos
    .map(grupo => criarCartaoCategoria(grupo, total))
    .join('');

  totalEl.textContent  = formatarMoeda(total);
  contadorEl.textContent = `${lista.tamanho} ${lista.tamanho === 1 ? 'item' : 'itens'}`;

  // Animação de entrada dos cartões
  listaGrid.querySelectorAll('.cartao-categoria').forEach((el, i) => {
    el.style.animationDelay = `${i * 80}ms`;
    el.classList.add('animar-entrada');
  });

  // Animar barras depois do render
  requestAnimationFrame(() => {
    listaGrid.querySelectorAll('.barra-fill').forEach(el => {
      el.style.transition = 'width 0.7s cubic-bezier(.4,0,.2,1)';
    });
  });
};

// ── Exibição de erros ────────────────────────────────────────
const exibirErros = erros => {
  erroBox.innerHTML = erros.map(e => `<p>⚠ ${e}</p>`).join('');
  erroBox.classList.remove('oculto');
  erroBox.classList.add('vibrar');
  setTimeout(() => erroBox.classList.remove('vibrar'), 500);
};

const limparErros = () => {
  erroBox.innerHTML = '';
  erroBox.classList.add('oculto');
};

// ── Handlers ─────────────────────────────────────────────────

const handleSubmit = e => {
  e.preventDefault();
  limparErros();

  const categoria = inputCat.value;
  const valor     = parsearValor(inputVal.value);
  const { valido, erros } = validarEntrada({ categoria, valor });

  if (!valido) { exibirErros(erros); return; }

  lista.adicionar(new Item(categoria, valor));
  renderizar();

  // Reset parcial: mantém categoria, limpa valor
  inputVal.value = '';
  inputVal.focus();

  // Feedback visual no botão
  btnCalcular.textContent = '✓ Adicionado!';
  btnCalcular.classList.add('sucesso');
  setTimeout(() => {
    btnCalcular.textContent = 'Adicionar';
    btnCalcular.classList.remove('sucesso');
  }, 1200);
};

const handleLimpar = () => {
  lista.limpar();
  renderizar();
  form.reset();
  limparErros();
};

const handleRemoverItem = e => {
  const btn = e.target.closest('.btn-remover');
  if (!btn) return;
  const id = btn.dataset.id;
  lista.remover(id);
  renderizar();
};

// ── Registro de eventos (addEventListener) ───────────────────
form.addEventListener('submit',  handleSubmit);
btnLimpar.addEventListener('click',   handleLimpar);
listaGrid.addEventListener('click',   handleRemoverItem);

// Validação em tempo real no campo de valor
inputVal.addEventListener('input', () => {
  const v = parsearValor(inputVal.value);
  inputVal.classList.toggle('input-invalido', isNaN(v) || v <= 0);
  if (!isNaN(v) && v > 0) limparErros();
});