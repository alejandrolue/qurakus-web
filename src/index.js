import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import TimeStamp from './Sites/TimeStamp'
import LoginPage from './Sites/LoginPage'
import AdminPage from './Sites/AdminPage'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/punchclock" element={<TimeStamp />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
