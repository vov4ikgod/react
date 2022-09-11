import React from "react";  
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="page-wrapper">
            {pagesArray.map(p => 
                <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page-active': 'page'}>{p}</span>    
            )} 
        </div>
    )
}

export default Pagination;