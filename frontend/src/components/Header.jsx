import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import WineBarIcon from '@mui/icons-material/WineBar';
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

    const onClearSearch = (e) => {
        e.preventDefault();
        window.location.reload()
    }

    return (
        <header className="header">
            <div className="logo">
                <Link className="text-logo" to="/">bottlesDb</Link>
            </div>
            <div className="logo">
                <Link className="icon-logo" to="/"><WineBarIcon /></Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <form onSubmit={onSearch}>
                                <TextField
                                    // InputProps={{
                                    //     endAdornment: (
                                    //         <InputAdornment position={'end'}>
                                    //             <Button
                                    //                 color="inherit"
                                    //                 className="btn"
                                    //                 onClick={onSearch}

                                    //             >
                                    //                 <SearchIcon />
                                    //             </Button>
                                    //         </InputAdornment>
                                    //     )
                                    // }}
                                    id="search"
                                    label="search"
                                    variant="standard"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                
                                />
                            </form>
                        </li>
                        <li>
                            <Button
                                color="inherit"
                                className="btn"
                                onClick={onClearSearch}
                            >
                                <ClearIcon fontSize="inherit" />
                            </Button>
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
