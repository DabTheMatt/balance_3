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
    const [item, setItem] = useState('');
    const [substitute, setSubstitute] = useState('');
    const [pictureAdress, setPictureAdress] = useState('');
    const [pictureSize, setPictureSize] = useState('');

    useEffect(() => {
        console.log(numberOfItems);
        console.log('submited', submited);
        ref.current?.scrollIntoView({behavior: 'smooth'});
     }, [numberOfItems, submited, ref]);

    const handleSubmit= (e) =>  {
        e.preventDefault();
        let numbers = 0;
        let numberOfPictures;
        if (howMany <= 5) {
            numbers = parseInt(howMany / 0.03); 
            setSubstitute('pencils');
            setPictureAdress('/assets/pencils/');
            setPictureSize('picture_very_small');
            numberOfPictures = 21;
        } else if (howMany > 5 && howMany <= 10) {
            numbers = howMany * 5; 
            setSubstitute('vacines');
            setPictureAdress('/assets/vacines/');
            setPictureSize('picture_small');
            numberOfPictures = 4;
        } else if (howMany > 10 && howMany <= 100) {
            numbers = parseInt(howMany * 0.2);
            setSubstitute('baobab trees');
            setPictureAdress('/assets/baobabs/');
            setPictureSize('picture_huge');
            numberOfPictures = 21;
        } else if (howMany > 100 && howMany < 10000) {
            numbers = parseInt(howMany * 0.1);
            setSubstitute('hospital beds');
            setPictureAdress('/assets/beds/');
            setPictureSize('picture_huge');
            numberOfPictures = 4;
        }
        console.log('numbers', numbers);
        console.log('numbers of pictures', numberOfPictures);
        setItem(what);
        setNumberOfItems(numbers);
        setSubmited(true);
  
        let tempAr = Array.from(Array(numbers).keys());
        console.log('tempAr length', tempAr.length);

       let tempAr2 = tempAr.map(function (el) {
            return Math.floor(Math.random() * (numberOfPictures - 1 + 1) + 1);
        });
        console.log('tempAr2', tempAr2);

        setVacinesArray(tempAr2);
      };


    return (
        <div className="main-container" id="main-id">
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
                <div className="items-exclaimer">Your <span className="item">{item}</span> is worth <span>{numberOfItems}</span> {substitute}</div>
                <hr className="one-page-form-line"></hr>
                <div className="items-container">
                    {Array.from(Array(numberOfItems).keys()).map((crate, index) => {
                    return (
                        <div key={index}>
                            <img className={pictureSize} src={process.env.PUBLIC_URL + `${pictureAdress}${vacinesArray[index]}.png`}></img>
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