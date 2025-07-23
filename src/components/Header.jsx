import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='a restaurant'/>
            <h1>Adam Gibi Food</h1>
        </div>
        <nav>
            <Button textOnly={true}>Cart (0)</Button>
        </nav>
    </header>
}