import './App.css';
import ListaPessoas from './components/ListaPessoas';
import Header from './layout/Header';
import Footer from './layout/Footer';

const gentes = [
  {
    id: 1,
    nome: 'Guilherme',
    perfil: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facilis deleniti, vel quidem quam cum magni dignissimos debitis temporibus repudiandae consequatur, modi placeat explicabo alias voluptates rerum architecto! Alias, rerum!',
    link: 'https://github.com/guilherme'
  },
  {
    id: 2,
    nome: 'Otávio',
    perfil: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis corrupti nisi, cumque necessitatibus fugiat tenetur! Vero quam ea eos? Explicabo aliquam dolorem esse pariatur mollitia, quasi nesciunt cum quisquam quod?',
    link: 'https://github.com/otavio'
  },
  {
    id: 3,
    nome: 'Júlio',
    perfil: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur autem architecto accusantium! Ipsa dolor in laboriosam, a fugit sapiente labore cumque ducimus minus. Quisquam quidem ducimus praesentium fuga provident.',
    link: 'https://github.com/julio'
  },
  {
    id: 4,
    nome: 'Júlio',
    perfil: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium voluptatem ea maiores enim quam molestiae consequuntur expedita modi minus nam consectetur cupiditate nostrum iste dicta, excepturi qui quia distinctio!',
    link: 'https://github.com/julhoverme'
  },
];

const headerDetails = {
  logo: "https://ambevtech.com.br/wp-content/themes/ambevtech/assets/img/ambev-tech-logo.svg",
  altText: "AmbevTech"
};

function App() {
  return (
    <div className="App">
      <Header info={headerDetails} />
      <ListaPessoas pessoas={gentes} />
      <Footer />
    </div>
  );
}

export default App;
