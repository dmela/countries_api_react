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
      <CountriesInfoPanel data={data_obj}></CountriesInfoPanel>
    </div>
  );
}

function InfoSection(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        {props.Content}
      </div>
    </div>
  )
}

function LanguageList(props) {
  return (
    <div>
      <ul>
      {
        Object.keys(props.languages).map( (lang) => {
          return <li>{lang}</li>
        })
      }
      </ul>
    </div>
  )
}

function BasicInfo(props) {
  return (
    <div>
      <p>{props.info_obj.capital}</p>
      <p>{props.info_obj.region}</p>
    </div>
  )
}

function FlagContainer(props) {
  return (
    <div>
      <img src={props.flag}/>
    </div>
  )
}


function CountriesInfoPanel(props) {
  const country = props.data.country_name
  const languages = props.data.languages
  const basic_info_obj = {
    "capital": props.data.capital,
    "region": props.data.region
  }
  const flag = props.data.flag
  const BasicInfoContent = <BasicInfo info_obj={basic_info_obj}></BasicInfo>
  const LanguageListContent = <LanguageList languages={languages}></LanguageList>
  const FlagContainerContent = <FlagContainer flag={flag}></FlagContainer> 

  return (
    <div>
      <InfoSection header={country} Content={BasicInfoContent}></InfoSection>
      <InfoSection header={"language"} Content={LanguageListContent}></InfoSection>
      <InfoSection header={''} Content={FlagContainerContent}></InfoSection>
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
