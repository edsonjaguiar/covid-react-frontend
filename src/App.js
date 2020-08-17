// Libs
import React from "react";

import { Cards, Chart, ContryPicker } from "./components";

// Imported from Style App
import styles from "./App.module.css";

// import API
import { fetchData } from "./API";

// Import image Covid
import coronaIMG from "./images/image.jpeg";

class App extends React.Component{
    
    state = {
        data: {},
        country: "",
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });

    }

    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img src={coronaIMG} className={styles.image} alt="COVID-19"/>
                <Cards data={data}/>
                <ContryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;