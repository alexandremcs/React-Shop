import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Product image='/images/tenis-azul.jpg' title='Tênis Asics Gel-rocket 10 Masculino' description=' Ideal para jogar vôlei, o Tênis Asics Gel-Rocket 10 Masculino oferece tração elevada e conta com reforço na biqueira para maior firmeza e segurança nos lances dentro da quadra, assim como a tecnologia Trusstic System, que fornece maior estabilidade torsional. O tênis masculino de vôlei possui cabedal produzido em material sintético para maior estabilidade e recortes em tecido para maior respirabilidade. Com tecnologia Asics a favor da sua performance, você tem todo o suporte e amortecimento Gel para dominar os treinos e competições de vôlei. Já o solado traz borracha resistente com ponto de giro para facilitar o seu movimento dentro do jogo.' price='499,00' />
      <Footer />
    </div>
  );
}

export default App;
