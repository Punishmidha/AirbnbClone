import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";
import MyListing from "./pages/MyListing";
import ViewCard from "./pages/ViewCard";
import MyBooking from "./pages/MyBooking";
import Booked from "./pages/Booked";

import ProtectedRoute from "./Context/ProtectRoute";

function App() {
    return (
        <>
            {/* Toast container for showing alerts */}
            <ToastContainer position="top-center" autoClose={2000} />

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Protected Routes */}
                <Route
                    path="/listingpage1"
                    element={
                        <ProtectedRoute>
                            <ListingPage1 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/listingpage2"
                    element={
                        <ProtectedRoute>
                            <ListingPage2 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/listingpage3"
                    element={
                        <ProtectedRoute>
                            <ListingPage3 />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mylisting"
                    element={
                        <ProtectedRoute>
                            <MyListing />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/viewcard"
                    element={
                        <ProtectedRoute>
                            <ViewCard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mybooking"
                    element={
                        <ProtectedRoute>
                            <MyBooking />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/booked"
                    element={
                        <ProtectedRoute>
                            <Booked />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
