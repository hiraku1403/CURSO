// ── Header.jsx ───────────────────────────────────────────────
function Header({ total }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <span className="header__logo-mark">◈</span>
          <span className="header__logo-text">Vitrine</span>
        </div>
        <nav className="header__nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#cadastrar">Cadastrar</a>
        </nav>
        <div className="header__meta">
          <span className="header__count">{total} {total === 1 ? "produto" : "produtos"}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
