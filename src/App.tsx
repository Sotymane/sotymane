import "./App.css";
import { Header } from "./components/Header";
import { Release } from "./components/Release";

function App() {
    return (
        <>
            <Header />
            <ul className="songs">
                <Release
                    name="Song 1"
                    imageUrl="/1.png"
                    bandlinkUrl="https://google.com"
                />
                <Release
                    name="Song 2"
                    imageUrl="/2.png"
                    bandlinkUrl="https://google.com"
                />
            </ul>
            <div className="contact">
                <h6>Contact: ....@..ru</h6>
            </div>
        </>
    );
}

export default App;
