import { useState } from "react";

import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart";

import './styles/main.scss'

function App() {
    const [searchValue, setsearchValue] = useState();

    return (
        <main className="App">
            <SearchBar searchValue={searchValue} setsearchValue={setsearchValue} />
            <Weather />
            <WeatherForecastChart />
        </main>
    );
}

export default App;
