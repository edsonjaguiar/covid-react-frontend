// libs
import React from "react";

// lib @material-ui
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

// lib ContUp
import CountUp from "react-countup";

// lib classnames
import cx from "classnames";

// import style
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Números ativos de casos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Números de pessoas recuperadas do COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography variant="body2">Números de mortes causadas pelo COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;