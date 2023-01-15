import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Produtos</a></li>
          <li><a>Sobre</a></li>
          <li><a>Contato</a></li>
        </ul>
      </nav>
      <form>
        <input type="text" placeholder="Pesquisar..." />
        <button type="submit">OK</button>
      </form>
      <div className="shopping-cart">
        <img alt="Shopping Cart" />
        <a href="#">Carrinho</a>
      </div>
    </header>
  );
}

export default Header;