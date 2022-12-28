import { useState, useEffect, useRef } from "react";

export default function OnePage(props) {

    const [base, setBase] = useState(2 / 4);

    return (
        <div className="main-container">
            <h1 className="main-title">Balance</h1>
            <h2 className="main-subtitle">Check how much is it worth?</h2>
        </div>
    )
}