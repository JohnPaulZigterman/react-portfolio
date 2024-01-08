import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;