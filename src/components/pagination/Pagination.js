import React from "react";
import "./pagination.css"

const Pagination = (props) => {
    const{page,totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}>L</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>R</button>
        </div>
    )
}

export default Pagination