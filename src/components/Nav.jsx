import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>HomePage</div>
            </Link>
            <Link to='/character/:id'>
                <div>CharacterList</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}