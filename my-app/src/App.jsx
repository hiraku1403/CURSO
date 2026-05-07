// ── App.jsx ──────────────────────────────────────────────────
// Raiz da aplicação: gerencia state global, useEffect e roteamento

import { useState, useEffect } from "react";
import Header          from "./components/Header";
import Loading         from "./components/Loading";
import Catalogo        from "./pages/Catalogo";
import FormularioProduto from "./components/FormularioProduto";
import { mockProdutos } from "./assets/mockProdutos";
import "./index.css";

function App() {
  // ── State ──────────────────────────────────────────────────
  const [produtos,    setProdutos]    = useState([]);
  const [carregando,  setCarregando]  = useState(true);

  // ── useEffect: simula chamada à API ───────────────────────
  useEffect(() => {
    // Simula latência de rede (1.6s)
    const timer = setTimeout(() => {
      setProdutos(mockProdutos);
      setCarregando(false);
    }, 1600);

    return () => clearTimeout(timer); // cleanup
  }, []); // array vazio → executa só na montagem

  // ── Adiciona produto vindo do formulário ──────────────────
  const handleAdicionar = (novoProduto) => {
    setProdutos((prev) => [novoProduto, ...prev]);
  };

  // ── Render ─────────────────────────────────────────────────
  return (
    <>
      <Header total={produtos.length} />

      <main className="main">
        {carregando ? (
          <Loading />
        ) : (
          <>
            <Catalogo
              produtos={produtos}
            />
            <FormularioProduto onAdicionar={handleAdicionar} />
          </>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Vitrine · Catálogo de Produtos</p>
      </footer>
    </>
  );
}

export default App;
