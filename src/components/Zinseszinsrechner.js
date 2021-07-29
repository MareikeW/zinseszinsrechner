import React, {useEffect, useState} from "react";
import Tabelle from "./Tabelle";

const Zinseszinsrechner = () => {
    const [daten, setDaten] = useState({
        anfangskapital: "",
        zinsrate: "",
        jahre: ""
    });

    const [jahre, setJahre] = useState([]);
    const [anfangskapital, setAnfangskapital] = useState([]);
    const [zinsen, setZinsen] = useState([]);
    const [endkapital, setEndkapital] = useState([]);

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleChange = (event) => {
        setIsButtonClicked(false);

        const { name, value } = event.target;

        setDaten((prevDaten) => {
            return {
                ...prevDaten,
                [name]: value
            }
        })
    }

    useEffect(() => {
        let jährlichesZinsenArray = [];

        jährlichesZinsenArray = endkapital.map((currentValue, index) => {
            return currentValue - anfangskapital[index];
        });

        setZinsen(jährlichesZinsenArray);

        jährlichesZinsenArray.length > 0 ? setIsButtonClicked(true) : setIsButtonClicked(false);

    }, [anfangskapital, endkapital])

    function calcAnfangskapital(jährlichesEndkapital, anzahlJahre) {
        let jährlichesAnfangskapitalArray = [];

        /* Formel: K = Kneu / (1 + (p/100))^n */
        for (let i = anzahlJahre.length; i >= 1; i--) {
            jährlichesAnfangskapitalArray.push(jährlichesEndkapital[jährlichesEndkapital.length - 1] / 
                ((1 + (daten.zinsrate / 100))**i))
        }

        setAnfangskapital(jährlichesAnfangskapitalArray);
    }

    const calcErgebnis = (event) => {
        event.preventDefault();

        let jahreArray = [];
        let jährlichesEndkapitalArray = [];

        /*
            Formel: Kneu = K * (1 + (p/100))^n
        */
        for (let i = 1; i <= daten.jahre; i++) {
            jahreArray.push(i);
            jährlichesEndkapitalArray.push(daten.anfangskapital * ((1 + (daten.zinsrate / 100))**i));      
        }

        setJahre(jahreArray);
        setEndkapital(jährlichesEndkapitalArray);

        calcAnfangskapital(jährlichesEndkapitalArray, jahreArray);
    }

    return (
        <div>
            <form onSubmit={calcErgebnis} className="zinsformular">
                <label htmlFor="anfangskapital">Anfangskapital</label>
                <input
                 name="anfangskapital"
                 id="anfangskapital"
                 type="number"
                 value={daten.anfangskapital}
                 placeholder="z. B. 1500"
                 onChange={handleChange}

                />

                <label htmlFor="zinsrate">Zinsrate in %</label>
                <input
                 name="zinsrate"
                 id="zinsrate"
                 type="number"
                 value={daten.zinsrate}
                 placeholder="z. B. 5"
                 onChange={handleChange}

                />

                <label htmlFor="jahre">Jahre</label>
                <input
                 name="jahre"
                 id="jahre"
                 type="number"
                 value={daten.jahre}
                 placeholder="z. B. 5"
                 onChange={handleChange}

                />

                <button type="submit">Berechnen</button>
            </form>

            {isButtonClicked ? <Tabelle jahr={jahre} zinsen={zinsen} anfangskapital={anfangskapital} endkapital={endkapital}/> : null}
        </div>
    )
}

export default Zinseszinsrechner;