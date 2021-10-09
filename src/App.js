import React, {useState, useEffect} from 'react'
import axios from 'axios'
import temp_flag from './resources/example_flag.png'
// let temp_flag = require('./resources/example_flag.png') // toimii myös, mutta temp_flag.default

let json_obj = require('./resources/example_data.json')

function App() {

  console.log(json_obj)
  const country_name = json_obj[0].name.official
  const capital = json_obj[0].capital[0]
  const region = json_obj[0].region
  const languages = json_obj[0].languages
  const flag = temp_flag

  const data_obj = {
    "country_name": country_name,
    "capital": capital,
    "region": region,
    "languages": languages,
    "flag": flag
  } 


  return (
    <div className="Countries_app">
      <SearchBar></SearchBar>
      <CountriesInfoPanel></CountriesInfoPanel>
    </div>
  );
}

function InfoSection(props) {
  return (
    <div>
      <h1>header</h1>
      <div>
        div
      </div>
    </div>
  )
}


function CountriesInfoPanel(props) {
  return (
    <div>
      <InfoSection></InfoSection>
      <InfoSection></InfoSection>
      <InfoSection></InfoSection>
    </div>
  )
}

function SearchBar() {
  return (
    <div>
      find countries: <input></input>
    </div>
  );
}

export default App;
