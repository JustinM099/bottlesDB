import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { searchBottles } from "../features/bottles/bottleSlice";
import { TextField, Button } from "@mui/material";
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
                                    variant="standard"
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </form>
                        </li>
                        <li>
                            <Button color="inherit" className="btn" onClick={onLogout}>
                                <LogoutIcon />
                            </Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                <LoginIcon /> login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <AccountCircleIcon /> register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
