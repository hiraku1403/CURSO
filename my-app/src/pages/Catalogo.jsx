// ── pages/Catalogo.jsx ───────────────────────────────────────
// Page principal: listagem com filtro por categoria

import ProdutoCard from "../components/ProdutoCard";
import { useState } from "react";

function Catalogo({ produtos }) {
  const [filtro, setFiltro] = useState("Todos");

  // Deriva lista única de categorias a partir dos produtos
  const categorias = ["Todos", ...new Set(produtos.map((p) => p.categoria).filter(Boolean))];

  const filtrados =
    filtro === "Todos" ? produtos : produtos.filter((p) => p.categoria === filtro);

  return (
    <section className="catalogo-section" id="catalogo">
      <div className="catalogo-section__header">
        <p className="eyebrow">◈ Catálogo</p>
        <h2 className="section-title">Nossos produtos</h2>
        <p className="section-sub">
          {filtrados.length} {filtrados.length === 1 ? "item encontrado" : "itens encontrados"}
        </p>
      </div>

      {/* Filtros por categoria */}
      <div className="filtros" role="group" aria-label="Filtrar por categoria">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn${filtro === cat ? " ativo" : ""}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <p className="sem-resultados">Nenhum produto nesta categoria.</p>
      ) : (
        // .map() para renderizar dinamicamente os ProdutoCards
        <div className="produtos-grid">
          {filtrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
              categoria={produto.categoria}
              isNovo={produto.isNovo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Catalogo;
