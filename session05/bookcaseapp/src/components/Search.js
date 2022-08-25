import React, { useState } from "react";

const Search = (props.setkeyword) => {
    const [keyword, setKeyword] = useState("")
    return (
        <>
            <form onSubmit={handleSubmit}><p style={{ color: "red" }}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
                <label>
                    Search:
                    <input type="text" value={props.setKeyword} onChange={(e) => props.setKeyword(e.target.value)} />
                </label>
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default Search;
