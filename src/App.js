import './App.css';
import Header from './components/Header'
import PokemonTeambuilder from './components/PokemonTeamBuilder/PokemonTeambuilder';

export default function App() {
  return (
    <div className='App'>
      <Header></Header>
      <section className='content wrapper'>
        <PokemonTeambuilder></PokemonTeambuilder>
      </section>
    </div>
  );
}


