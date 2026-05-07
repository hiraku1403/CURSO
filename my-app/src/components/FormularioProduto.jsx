// ── FormularioProduto.jsx ─────────────────────────────────────
// Formulário controlado com React — state + validação

import { useState } from "react";

const CATEGORIAS = ["Mobiliário", "Iluminação", "Decoração", "Têxteis", "Outros"];

const estadoInicial = {
  nome: "",
  preco: "",
  descricao: "",
  categoria: "",
  imagem: "",
};

function FormularioProduto({ onAdicionar }) {
  const [form, setForm]       = useState(estadoInicial);
  const [erros, setErros]     = useState({});
  const [enviado, setEnviado] = useState(false);

  // Atualiza o state do formulário (campo controlado)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (erros[name]) setErros((prev) => ({ ...prev, [name]: "" }));
  };

  // Validação simples — retorna objeto de erros
  const validar = () => {
    const novos = {};
    if (!form.nome.trim())        novos.nome     = "Nome é obrigatório.";
    if (!form.preco || isNaN(Number(form.preco)) || Number(form.preco) <= 0)
                                   novos.preco    = "Informe um preço válido.";
    if (!form.descricao.trim())   novos.descricao = "Descrição é obrigatória.";
    return novos;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = validar();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    // Monta objeto produto e chama callback do pai
    onAdicionar({
      id: Date.now(),
      nome:      form.nome.trim(),
      preco:     parseFloat(form.preco),
      descricao: form.descricao.trim(),
      categoria: form.categoria || "Outros",
      imagem:    form.imagem.trim() || "",
      isNovo:    true,
    });

    setForm(estadoInicial);
    setErros({});
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="form-section" id="cadastrar">
      <div className="form-section__header">
        <p className="eyebrow">◈ Cadastro</p>
        <h2 className="section-title">Adicionar produto</h2>
        <p className="section-sub">Preencha os campos abaixo para incluir um novo item no catálogo.</p>
      </div>

      <form className="form-produto" onSubmit={handleSubmit} noValidate>

        {/* Nome */}
        <div className={`form-grupo${erros.nome ? " form-grupo--erro" : ""}`}>
          <label htmlFor="nome">Nome do produto *</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
            placeholder="Ex: Poltrona Wabi"
            autoComplete="off"
          />
          {erros.nome && <span className="form-erro">{erros.nome}</span>}
        </div>

        {/* Preço + Categoria lado a lado */}
        <div className="form-row">
          <div className={`form-grupo${erros.preco ? " form-grupo--erro" : ""}`}>
            <label htmlFor="preco">Preço (R$) *</label>
            <input
              id="preco"
              name="preco"
              type="number"
              min="0"
              step="0.01"
              value={form.preco}
              onChange={handleChange}
              placeholder="0,00"
            />
            {erros.preco && <span className="form-erro">{erros.preco}</span>}
          </div>

          <div className="form-grupo">
            <label htmlFor="categoria">Categoria</label>
            <div className="select-wrap">
              <select
                id="categoria"
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
              >
                <option value="">Selecione…</option>
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div className={`form-grupo${erros.descricao ? " form-grupo--erro" : ""}`}>
          <label htmlFor="descricao">Descrição *</label>
          <textarea
            id="descricao"
            name="descricao"
            rows={3}
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descreva o produto brevemente…"
          />
          {erros.descricao && <span className="form-erro">{erros.descricao}</span>}
        </div>

        {/* URL da imagem (opcional) */}
        <div className="form-grupo">
          <label htmlFor="imagem">URL da imagem <span className="form-opcional">(opcional)</span></label>
          <input
            id="imagem"
            name="imagem"
            type="url"
            value={form.imagem}
            onChange={handleChange}
            placeholder="https://…"
          />
        </div>

        {enviado && (
          <p className="form-sucesso" role="status">
            ✓ Produto adicionado com sucesso!
          </p>
        )}

        <button type="submit" className="btn-submit">
          Cadastrar produto
        </button>
      </form>
    </section>
  );
}

export default FormularioProduto;
