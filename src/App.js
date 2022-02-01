import './App.css';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import PostCreator from "./pages/PostCreator";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/post/:id" element={<PostCreator/>}/>
            </Routes>
        </div>
    );
}

export default App;
