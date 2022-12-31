import { useState, useEffect, useRef } from "react";

export default function OnePage(props) {
    const ref = useRef(null);

    const [howMany, setHowMany] = useState('');
    const [what, setWhat] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [submited, setSubmited] = useState(false);

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
                <input className="one-page-form-input" placeholder="How much it will cost you?" id="form-how-many" type="number" value={howMany} onChange={e => setHowMany(e.target.value)}></input>
                <input className="one-page-form-submit-button" type="submit" value="Submit"/>
            </form>
            {(submited === false) ? (
                <div className="items-placeholder">Give me a price</div> 
            ) : (
                <div ref={ref}>
                <div className="items-exclaimer">For {howMany}$ you can buy {numberOfItems} vacines</div>
                <div className="items-container">
                    {Array.from(Array(numberOfItems).keys()).map((crate, index) => {
                    return (
                            <div
                        key={index}
                        className={`item`}
                        >
                        </div>
                    )
                        }
                    )}
                </div>
                </div>
            )
        }

        </div>
    )
    const executeScroll = () => this.myRef.scrollIntoView();
}