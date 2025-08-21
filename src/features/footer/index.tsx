import useColorTheme from "../../shared/contexts/color/hook";
import "./styles.scss";

export default function Footer() {

    const { text, primary } = useColorTheme();

    return (
        <footer id="footer" style={{ color: text }}>
            <p>Wow, you made it all the way to the bottom!</p>
            <p>I guess you could also follow us on <a style={{ color: primary }} href="https://www.instagram.com/app.mica.love">Instagram</a> now ;)</p>
        </footer>
    )
}