import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    return(
        <>
            <h1>GifExpert</h1>
            <hr/>
            <AddCategory categories={categories} setCategories={setCategories}/>

            
            <ol>
                {categories.map((category)=>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ol>
        </>
    )
}