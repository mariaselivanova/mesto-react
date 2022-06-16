import logo from './../images/logopic.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__link"><img src={logo} alt="лого"
        className="header__logo" /></a>
    </header>
  )
}

export default Header;
