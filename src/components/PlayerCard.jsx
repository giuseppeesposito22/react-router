export default function PlayerCard({ player }) {
  return (
    <div key={player.id} className="col">
      <div className="card h-100">
        <img src={player.immagine} className="card-img-top" alt={player.nome} />
        <div className="card-body">
          <p className="card-text d-flex flex-column align-items-center justify-content-between h-100 gap-3">
            <span className="text-center fw-bold fs-4">{player.nome}</span>

            <span>{player.ruolo}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
