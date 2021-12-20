import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends React.Component {
    render() { 
        return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
                <img src="img/music_note.jpg" height="100" width="100" alt="store"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Instruments
                    </Link>
                </li>
            </ul>
            <Link to='/cart'>
                <ButtonContainer>
                    My Cart
                </ButtonContainer>
            </Link>
        </NavWrapper>

        );
    }
}
 
export default Navbar;

const NavWrapper = styled.nav `
    .nav-link {
        color: var(--maingrey)!important;
        font-size: 25;
    }
`