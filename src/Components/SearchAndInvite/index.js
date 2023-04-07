import React from "react";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import PlusIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchAndInvite.css";

const SearchAndInvite = ({query, handelSearch}) => {

    return (
        <div className="search-and-invite-container">
            <TextField
                label="Search members"
                className="search-input"
                disablePointerEvents
                placeholder="Type here..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
                onChange={(event) => handelSearch(event.target.value)}
                value={query}
            />
            <div className="invite-button">
                <Button
                    sx={{color: "Black", borderColor: "black"}}
                    variant="outlined"
                    onClick={() => {
                    }}
                    size="small"
                    startIcon={<PlusIcon/>}
                >
                    Invite people
                </Button>
            </div>
        </div>
    );
};

export default SearchAndInvite;

//todo can add the search svg to input
