import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const initialState = {
    'countryName': '',
    'capital': '',
    'region': '',
    'languages': {},
    'flag': ''
  } 

  const [country, setCountry] = useState(initialState)
  
  useEffect( () => {
    axios
    .get('http://localhost:3001/dataexample')
    .then(response => {
      setCountry({
        'countryName': response.data.name.official,
        'capital': response.data.capital[0],
        'region': response.data.region,
        'languages': response.data.languages,
        'flag': response.data.flags.local
      })
    })
  }, [])
  console.log(country)

  return (
    <div className="Countries_app">
      <SearchBar></SearchBar>
      <CountriesInfoPanel data={country}></CountriesInfoPanel>
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
        Object.keys(props.languages).map( lang => {
          return <li key={lang}>{lang}</li>
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
      <img alt="country_flag" src={props.flag}/>
    </div>
  )
}


function CountriesInfoPanel(props) {
  const basic_info_obj = {
    "capital": props.data.capital,
    "region": props.data.region
  }
  const flag = props.data.flag
  const BasicInfoContent = <BasicInfo info_obj={basic_info_obj}></BasicInfo>
  const LanguageListContent = <LanguageList languages={props.data.languages}></LanguageList>
  const FlagContainerContent = <FlagContainer flag={flag}></FlagContainer> 

  return (
    <div>
      <InfoSection header={props.data.country_name} Content={BasicInfoContent}></InfoSection>
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
