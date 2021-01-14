import React from 'react'
import { connect } from 'react-redux'

import { RootState } from './store'
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

interface Props {
  success: boolean
}

class App extends React.Component<Props> {
  render() {
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
}

const mapStateToProps = (state: RootState) => {
  const { success, secret } = state
  return { success, secret }
}

export default connect(mapStateToProps)(App)
