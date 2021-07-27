import React from "react";
import { Line } from "react-chartjs-2";

const Diagramm = ({jahr, endkapital}) => {
    const data = {
        labels: [], // hier kommen die einzelnen Jahre rein
        datasets: [
            {
                label: "Jährliches Endkapital",
                data: [],
                backgroundColor: 'lightgreen',
                borderColor: 'lightgreen'
            }
        ]
    };

    for (let i = 0; i < jahr.length; i++) {
        data.labels.push(jahr[i])
        data.datasets[0].data.push(endkapital[i])
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        //console.log("value: " + value) z. B. value: 10000
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
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let tooltipBetrag = context.dataset.data[context.dataIndex].toLocaleString("de-DE", {style: "currency", currency: "EUR"});
                  return tooltipBetrag;
                }
              }
            }
          }
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