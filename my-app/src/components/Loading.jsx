// ── Loading.jsx ──────────────────────────────────────────────
function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner" aria-hidden="true" />
      <p className="loading__texto">Carregando produtos…</p>
    </div>
  );
}

export default Loading;
