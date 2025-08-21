import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/mica.png";
import useColorTheme from "../../shared/contexts/color/hook";
import "./styles.scss";

export default function Logo() {

    const { primary } = useColorTheme();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        window.scrollTo({
            behavior: "smooth",
            top: containerRef.current?.offsetHeight ?? 0
        });
    }

    return (
        <div id="brand-container" ref={containerRef} style={{ background: primary }}>

            <div id="center-wrapper">
                <img id="logo" src={logo} />
            </div>
            {isMobile && <img id="down" src="" onClick={handleScroll} />}
        </div>
    );
}