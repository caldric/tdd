import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../store'
import { guess } from '../actions'

interface Props {
  success: boolean
  guess: (word: string) => void
}

export class Input extends React.Component<Props> {
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.guess('')
  }

  renderForm() {
    const { success } = this.props

    return !success ? (
      <form
        className="form-inline"
        data-test="guess-form"
        onSubmit={this.handleSubmit}
      >
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    ) : null
  }

  render() {
    return <div data-test="component-input">{this.renderForm()}</div>
  }
}

const mapStateToProps = (state: RootState) => {
  return { success: state.success }
}

export default connect(mapStateToProps, { guess })(Input)
