import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../store'

interface Props {
  success: boolean
}

class Input extends React.Component<Props> {
  renderForm() {
    const { success } = this.props

    return !success ? (
      <form className="form-inline">
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

export default connect(mapStateToProps)(Input)
