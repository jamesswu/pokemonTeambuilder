import Types from './Types';

export default function PokemonContainer({ obj }) {
  return (
    <div className="item">
      <img
        src={`${obj.sprites.other['official-artwork'].front_default}`} alt="">
      </img>
      <h2>{obj.name}</h2>
      <div className="types">
        {
          obj.types.map((type, idx) => {
            return (
              <Types
                key={idx}
                type={type}>
              </Types>
            )
          })
        }
      </div>
    </div>
  )
}