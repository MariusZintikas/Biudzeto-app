import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <nav className="header">
            {/* <a href='../'><img src="/images/SekuLogo.png" alt="" /></a> */}
            <Link to="/"><img src="/images/SekuLogo.png" alt="Home" /></Link>
            <div></div>
            {/* <div>
            <button className='prisijungti'><a href='../LoginForm'>PRISIJUNGTI</a></button></div> */}
            
            <div><button className='registruotis'><a href='../RegistrationForm'>REGISTRUOTIS</a></button>
            {/* <a className='a1' href="/"> PRISIJUNGTI </a>
            <a className='a2'href="/"> REGISTRUOTIS </a> */}
            </div>
        </nav>
     );
}

export default Header;