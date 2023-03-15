import LogoType from '../../resources/img/Logo/Logo.png';
import './css/logo.css';

const Logo = () => {
    return (
        <div className='banner'>
            <img className='banner__logo' src={LogoType} alt="Logo" />
        </div>
    )
}

export default Logo;