// ── ProdutoCard.jsx ──────────────────────────────────────────
// Componente reutilizável que recebe dados via props

import { useState } from "react";

const formatarPreco = (preco) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(preco);

function ProdutoCard({ nome, preco, imagem, descricao, categoria, isNovo }) {
  const [favoritado, setFavoritado] = useState(false);

  return (
    <article className="produto-card">
      <div className="produto-card__img-wrap">
        {isNovo && <span className="produto-card__badge">Novo</span>}
        <button
          className={`produto-card__fav${favoritado ? " ativo" : ""}`}
          onClick={() => setFavoritado((v) => !v)}
          aria-label={favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {favoritado ? "♥" : "♡"}
        </button>
        <img
          src={imagem || `https://placehold.co/500x400/e8e0d5/6b6055?text=${encodeURIComponent(nome)}`}
          alt={nome}
          className="produto-card__img"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/500x400/e8e0d5/6b6055?text=${encodeURIComponent(nome)}`;
          }}
        />
      </div>

      <div className="produto-card__body">
        {categoria && <span className="produto-card__cat">{categoria}</span>}
        <h3 className="produto-card__nome">{nome}</h3>
        <p className="produto-card__desc">{descricao}</p>
        <div className="produto-card__footer">
          <span className="produto-card__preco">{formatarPreco(preco)}</span>
          <button className="produto-card__btn">Adicionar →</button>
        </div>
      </div>
    </article>
  );
}

export default ProdutoCard;
