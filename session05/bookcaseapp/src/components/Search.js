import React, { useState } from "react";

const Search = () => {
    const [keyword, setKeyword] = useState("")
    return (
        <>
            <form><p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
                <label>
                    Search:
                    <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </label>
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default Search;
