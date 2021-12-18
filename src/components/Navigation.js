import React,{ Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const burger = <FontAwesomeIcon icon={faBars} />

function Sidebar() {
    const [menulist, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!menulist);
    return (
        <>
        <button className="burgernav" onClick={showSidebar}>
        {burger}
        </button>
            <nav className={menulist ? "menulist active" : "menulist"}>
        <ul onClick={showSidebar}>
            <li><Link to="#">Our Mission</Link>
            </li>
            <li><Link to="#">Your Privacy</Link>
            </li>
            <li><Link to="#">Global Efforts</Link>
            </li>
            <li><Link to="#">Donate</Link>
            </li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Sidebar;

export class Navigation extends Component {

    render() {
        return(
            <header>
                <div className="top">
                <Router>
                    <Sidebar />
                <Link to="#">
                <h1>Locavoria</h1>
                </Link>
                </Router>
                </div>
            </header>
        );
    }
}