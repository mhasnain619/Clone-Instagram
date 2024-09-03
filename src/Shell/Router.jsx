import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Access/Login";
import Signup from "../Access/Signup";
import Home from "../Access/Home";
import WithLayout from '../Layout/WithLayout';  // Adjust import path if necessary
import UserPost from "../Components/UserPost";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/dashboard"
                    element={
                        <WithLayout>
                            <UserPost />
                        </WithLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
