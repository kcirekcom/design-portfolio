import * as React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
    render() {

        return (
            <nav>
                <h1 className='nav-brand'>
                    <a href='/'>
                        Erick F. Mock
                    </a>
                </h1>

                <ul className='nav-links'>
                    <li>
                        <Link className='nav-link-anchor' to='/prototypes'>
                            Prototypes
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link-anchor' to='/development'>
                            Development
                        </Link>
                    </li>

                    <li>
                        <Link className='nav-link-anchor' to='/visualizations'>
                            Visualizations
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}