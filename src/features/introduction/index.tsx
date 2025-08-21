import useColorTheme from "../../shared/contexts/color/hook";
import "./styles.scss";

export default function Introduction() {

    const { text, primary } = useColorTheme();

    return (
        <div id="introduction">
            <p style={{ color: text }}>
                <span style={{ color: primary }}>Mica</span> is a modern loyalty program platform designed to help businesses engage with their customers effectively.<br />
                With intuitive tools and seamless integrations, Mica makes it easy to reward loyal customers, track engagement, and grow your brand. Whether you're a small business or a large enterprise, our platform adapts to your needs, helping you build lasting relationships and drive repeat business.
            </p>
        </div>
    )
}