import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <div className="header">
            <img src="/images/SekuLogo.png" alt="" />
            <a className='a1' href="/"> PRISIJUNGTI </a>
            <a className='a2'href="/"> REGISTRUOTIS </a>
        </div>
     );
}

export default Header;