import napoliTeam from "../data/napoliTeam";
import PlayerCard from "../components/PlayerCard";

export default function PostsPage() {
  return (
    <>
      <h1 className="text-center my-2">
        La rosa del Napoli campione in Italia
      </h1>
      <div className="row row-cols-4 my-5 g-5">
        {napoliTeam.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}
