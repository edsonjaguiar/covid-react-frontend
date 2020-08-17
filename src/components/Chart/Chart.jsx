// libs
import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Infectados",
                            borderColor: "#00ff01",
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Mortes",
                            borderColor: "red",
                            backgroundColor: "rgba(255, 0, 0, 0.5)",
                            fill: true,
                        }]
                    }}
                />) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ["Infectados", "Recuperados", "Mortes"],
                        datasets: [{
                            label: "Pessoas",
                            backgroundColor: ["#00ff01", "#00f7ff", "red"],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    option={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;