// ============================================================
// utils.js — Funções auxiliares (puras)
// ============================================================

/**
 * Formata um número como moeda BRL.
 * Função pura: mesmo input → mesmo output, sem efeitos colaterais.
 */
export const formatarMoeda = valor =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

/**
 * Valida o formulário de entrada.
 * Retorna { valido: boolean, erros: string[] }
 */
export const validarEntrada = ({ categoria, valor }) => {
  const erros = [];

  const categoriasValidas = ['Alimentação', 'Lazer', 'Aluguel', 'Outros'];
  if (!categoriasValidas.includes(categoria)) erros.push('Selecione uma categoria válida.');

  const num = parseFloat(valor);
  if (isNaN(num) || num <= 0)  erros.push('Informe um valor maior que zero.');
  if (num > 1_000_000)         erros.push('Valor muito alto. Limite: R$ 1.000.000,00.');

  return { valido: erros.length === 0, erros };
};

/**
 * Parseia o valor do input para float de forma segura.
 */
export const parsearValor = str =>
  parseFloat(String(str).replace(',', '.'));

/**
 * Mapeamento de ícones por categoria (função pura).
 */
export const iconeDaCategoria = categoria => {
  const mapa = {
    'Alimentação': '🛒',
    'Lazer':       '🎉',
    'Aluguel':     '🏠',
    'Outros':      '📦',
  };
  return mapa[categoria] ?? '💰';
};

/**
 * Mapeamento de cor de destaque por categoria.
 */
export const corDaCategoria = categoria => {
  const mapa = {
    'Alimentação': '#FF6B6B',
    'Lazer':       '#FFD93D',
    'Aluguel':     '#6BCB77',
    'Outros':      '#4D96FF',
  };
  return mapa[categoria] ?? '#999';
};

/**
 * Calcula a porcentagem de um valor em relação ao total.
 * Função pura.
 */
export const calcularPorcentagem = (valor, total) =>
  total === 0 ? 0 : Math.round((valor / total) * 100);