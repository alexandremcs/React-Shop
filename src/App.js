import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';

const products = [
  {
    image: '/images/tenis-azul.jpg',
    title: 'Tênis Asics Gel-rocket 10 Masculino',
    description: 'Ideal para jogar vôlei, o Tênis Asics Gel-Rocket 10 Masculino oferece tração elevada e conta com reforço na biqueira para maior firmeza e segurança nos lances dentro da quadra, assim como a tecnologia Trusstic System, que fornece maior estabilidade torsional.',
    price: '499,00'
  },
  {
    image: '',
    title: '',
    description: '',
    price: ''
  },
  {
    image: '',
    title: '',
    description: '',
    price: ''
  },
  {
    image: '',
    title: '',
    description: '',
    price: ''
  }  
]

function App() {
  return (
    <div className="App">
      <Header />
      {products.map(product =>
        <Product
          key={product.title}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
        />)}
      <Footer />
    </div>
  );
}

export default App;
