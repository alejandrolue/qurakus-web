import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import TimeStamp from './Sites/TimeStamp'
import LoginPage from './Sites/LoginPage'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/punchclock" element={<TimeStamp />} />
            <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
