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

                <div className='responsive'>
                    <ul>
                        <li><a href='/' className='icon-profile'/></li>
                        <li><Link className='icon-insert-template' to='/prototypes'/></li>
                        <li><Link className='icon-terminal' to='/development'/></li>
                        <li><Link className='icon-stats-dots' to='/visualizations'/></li>
                    </ul>
                </div>

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