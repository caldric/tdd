import React from 'react'

import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guesses={[
          { word: 'train', letterMatches: 3 },
          { word: 'agile', letterMatches: 1 },
          { word: 'party', letterMatches: 5 },
        ]}
      />
    </div>
  )
}

export default App
