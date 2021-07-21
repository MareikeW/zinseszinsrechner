import React from "react";

const Tabelle = ({jahr, anfangskapital, zinsen, endkapital}) => {
    function createTabelle() {
        let sparTabelle = [];

        for (let i = 0; i < jahr.length; i++) {
            sparTabelle.push(
                <tr key={jahr[i]}>
                    <td className="tabelle__cell">{jahr[i]}</td>

                    <td className="tabelle__cell">
                        {
                            anfangskapital[i].toLocaleString("de-DE", {
                                style: "currency",
                                currency: "EUR"
                            })
                        }
                    </td>

                    <td className="tabelle__cell">
                        {
                            zinsen[i].toLocaleString("de-DE", {
                                style: "currency",
                                currency: "EUR"
                            })
                        }
                    </td>

                    <td className="tabelle__cell">
                        {
                            endkapital[i].toLocaleString("de-DE", {
                                style: "currency",
                                currency: "EUR"
                            })
                        }
                    </td>
                </tr>
            )
        }
        return sparTabelle;
    }

    return (
        <div>
            <table className="tabelle">
                <thead>
                    <tr>
                        <th className="tabelle__heading">Jahr</th>
                        <th className="tabelle__heading">Anfangskapital</th>
                        <th className="tabelle__heading">Zinsen</th>
                        <th className="tabelle__heading">Endkapital</th>
                    </tr>
                </thead>
                <tbody>
                    {createTabelle()}
                </tbody>
            </table>
        </div>
    )
}

export default Tabelle;