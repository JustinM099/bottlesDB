import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { searchBottles } from "../features/bottles/bottleSlice";
import { TextField } from "@mui/material";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [query, setQuery] = useState('');

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    const onSearch = (e) => {
        e.preventDefault();
        console.log("SEARCH TRIGGERED. QUERY: ", query);
        dispatch(searchBottles(query));
        setQuery('');
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">bottlesDb</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <form onSubmit={onSearch}>
                                <TextField
                                    id="search"
                                    label="search"
                                    variant="filled"
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </form>
                        </li>
                        <li>
                            <button className="btn" onClick={onLogout}>
                                <FaSignOutAlt /> logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
