import React from 'react'
import { connect } from 'react-redux'

import { RootState } from './store'
import { getSecret } from './actions'

import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import Input from './components/Input'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

interface Props {
  success: boolean
  guesses: Record<string, Guess>
}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guesses={this.props.guesses} />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const { success, secret, guesses } = state
  return { success, secret, guesses }
}

export default connect(mapStateToProps, { getSecret })(App)
