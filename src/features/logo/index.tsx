import { useMediaQuery } from "react-responsive";
import logo from "../../assets/mica.png";
import useColorTheme from "../../shared/contexts/color/hook";
import "./styles.scss";

export default function Logo() {

    const { background } = useColorTheme();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div id="brand-container" style={{ background }}>

            <div id="center-wrapper">
                <img id="logo" src={logo} />
            </div>
            {isMobile && <img id="down" src="" />}
        </div>
    );
}