import './App.css';
import ListaPessoas from './components/ListaPessoas';
import Header from './layout/Header';

const pessoas = [
  { id: 1, nome: 'Guilherme' },
  { id: 2, nome: 'Otávio' },
  { id: 3, nome: 'Júlio' },
  { id: 4, nome: 'Júlio' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <ListaPessoas pessoas={pessoas} />
    </div>
  );
}

export default App;
