import Footer from './features/footer';
import Signup from './features/form';
import Introduction from './features/introduction';
import Logo from './features/logo';
import useColorTheme from './shared/contexts/color/hook';
import './styles.scss';

export default function App() {

    const { background } = useColorTheme();

    return (
        <div id="app" style={{ background }}>
            <Logo />
            <div id='content'>
                <Introduction />
                <Signup />
                <Footer />
            </div>
        </div>
    )
}
