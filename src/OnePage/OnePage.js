import { useState, useEffect, useRef } from "react";

export default function OnePage(props) {


    const [howMany, setHowMany] = useState('');
    const [what, setWhat] = useState('');

    const handleSubmit= (e) =>  {
       
      };

    return (
        <div className="main-container">
            <h1 className="main-title">Balance</h1>
            <h2 className="main-subtitle">Check how much is it worth?</h2>
            <hr className="line-divider"></hr>
            <form className="one-page-form" onSubmit={e => handleSubmit(e)}>
                <label className="one-page-form-label">What?</label>
                <input className="one-page-form-input" placeholder="What do you want to buy?" id="form-what" type="text" value={what} onChange={e => setWhat(e.target.value)}></input>
             <br/>
               <label className="one-page-form-label">How much?</label>
                <input className="one-page-form-input" placeholder="How much it will cost you?" id="form-how-many"type="number" value={howMany} onChange={e => setHowMany(e.target.value)}></input>
                <input className="one-page-form-submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}