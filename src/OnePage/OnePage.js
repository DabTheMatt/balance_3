import { useState, useEffect, useRef } from "react";
import vacine_1 from "../assets/vacines/vacine_1.png";
import vacine_2 from "../assets/vacines/vacine_2.png";
import vacine_3 from "../assets/vacines/vacine_3.png";
import vacine_4 from "../assets/vacines/vacine_4.png";

export default function OnePage(props) {
    const ref = useRef(null);

    const [howMany, setHowMany] = useState('');
    const [what, setWhat] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [submited, setSubmited] = useState(false);
    const [vacinesArray, setVacinesArray] = useState([]);

    useEffect(() => {
        console.log(numberOfItems);
        console.log('submited', submited);
        ref.current?.scrollIntoView({behavior: 'smooth'});
     }, [numberOfItems, submited, ref]);

    const handleSubmit= (e) =>  {
        e.preventDefault();
        let numbers = howMany * 5
        setNumberOfItems(numbers);
        setSubmited(true);

        

        let tempAr = Array.from(Array(numbers).keys());
        console.log('tempAr length', tempAr.length);

       let tempAr2 = tempAr.map(function (el) {
            return 'vacine_' + Math.floor(Math.random() * (4 - 1 + 1) + 1);
        });
        console.log('tempAr2', tempAr2);

        setVacinesArray(tempAr2);
      };


    return (
        <div className="main-container">
            <h1 className="main-title">Balance</h1>
            <h2 className="main-subtitle">How much is worth?</h2>
            <hr className="line-divider"></hr>
            <form className="one-page-form" onSubmit={e => handleSubmit(e)}>
                <label className="one-page-form-label">What do you want to buy?</label>
                <input className="one-page-form-input" id="form-what" type="text" value={what} onChange={e => setWhat(e.target.value)} autoFocus></input>
                <hr className="one-page-form-line"></hr>
             <br/>
               <label className="one-page-form-label">How much $ it costs?</label>
                <input className="one-page-form-input" id="form-how-many" type="number" value={howMany} onChange={e => setHowMany(e.target.value)}></input>
                <hr className="one-page-form-line"></hr>
                <input className="one-page-form-submit-button" type="submit" value="Check"/><nobr>>></nobr>
            </form>
            {(submited === false) ? (
                <div className="items-placeholder"></div> 
            ) : (
                <div ref={ref}>
                <div className="items-exclaimer">Your <span>{what}$</span> is worth <span>{numberOfItems}</span> vacines</div>
                <hr className="one-page-form-line"></hr>
                <div className="items-container">
                    {Array.from(Array(numberOfItems).keys()).map((crate, index) => {
                    return (
                        <div key={index}>
                            <img className={'item'} src={process.env.PUBLIC_URL + `/assets/vacines/${vacinesArray[index]}.png`}></img>
                        </div>
                    )
                        }
                    )}
                <hr className="one-page-form-line"></hr>
                </div>
                </div>
            )
        }

        </div>
    )
    const executeScroll = () => this.myRef.scrollIntoView();
}