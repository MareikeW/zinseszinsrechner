import React from "react";
import { Line } from "react-chartjs-2";

const Diagramm = ({jahre, endkapital}) => {
    const data = {
        labels: jahre,
        datasets: [{
            label: "Jährliches Endkapital",
            data: endkapital,
            backgroundColor: "lightgreen",
            borderColor: "lightgreen"
        }]
    }

    const options = {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        let betrag = value.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
                        return betrag;
                    }
                },
                title: {
                    display: true,
                    text: "Endkapital"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Jahre"
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let tooltipBetrag = context.dataset.data[context.dataIndex].toLocaleString("de-DE", {style: "currency", currency: "EUR"});
                        return tooltipBetrag;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }

    return (
        <div style={{width: "75%", height: "50vh", margin: "50px auto"}}>
            <Line 
                data={data}
                options={options}
            />
        </div>
    )
}

export default Diagramm;