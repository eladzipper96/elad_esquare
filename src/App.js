import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import {useState} from 'react'

function App() {

  const [data, setData] = useState(null)
  const [showSpinner, setShowSpinner] = useState(null)

  return (
    <div className='layout'>

        <div className='top'>
          <Header />
          <SearchBar setData={setData} setShowSpinner={setShowSpinner}/>
        </div>

        <Main data={data} showSpinner={showSpinner}/>
    </div>
  );
}

export default App;
