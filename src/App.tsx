import Footer from './features/footer';
import Signup from './features/form';
import Introduction from './features/introduction';
import Logo from './features/logo';
import { ColorThemeProvider } from './shared/contexts/color/provider';
import './styles.scss';

export default function App() {

    return (
        <ColorThemeProvider>
            <div id="app">
                <Logo />
                <div id='content'>
                    <Introduction />
                    <Signup />
                    <Footer />
                </div>
            </div>
        </ColorThemeProvider>
    )
}
