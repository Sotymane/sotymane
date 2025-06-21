import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Release } from "./components/Release";

function App() {
    return (
        <>
            <div className="bg" />
            <Header />
            <ul className="songs">
                <Release
                    name="Sotymane - Teleport Inside"
                    imageUrl="./covers/teleport-inside_x1024.jpg"
                    bandlinkUrl="https://band.link/teleportinside"
                />
                <Release
                    name="Grey Killer, Sotymane - Dark Road"
                    imageUrl="./covers/DR1_x1024.jpg"
                    bandlinkUrl="https://band.link/darkroad"
                />
                <Release
                    name="Sotymane, friedeyez - In Halftone"
                    imageUrl="./covers/In Halftone_x1024.jpg"
                    bandlinkUrl="https://band.link/inhalftone"
                />
            </ul>
            <Footer />
        </>
    );
}

export default App;
