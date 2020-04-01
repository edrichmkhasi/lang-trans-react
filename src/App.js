import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useTranslation} from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <nav style={{width: '100%', padding: '2rem 0', backgroundColor: 'grey'}}>

        {/* button for English language */}
        <button onClick={() => handleClick('en')}>
          English
        </button>

        {/* button for Japanese language */}
        <button onClick={() => handleClick('ko')}>
          Korean
        </button>

        {/* button for chinnese language */}
        <button onClick={() => handleClick('chi')}>
          Chinnese
        </button>


      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <p>
          {t('Programmer.name')}
        </p>
        <p>
          {t('Student.name')}
        </p>
       
       
      </header>
    </div>
  );
}

export default App;
