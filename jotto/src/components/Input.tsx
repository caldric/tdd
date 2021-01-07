import React from 'react'
import { connect } from 'react-redux'

interface Props {
  success: boolean
}

const Input: React.FC<Props> = ({ success }) => {
  const renderForm = () =>
    !success ? (
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

  return <div data-test="component-input">{renderForm()}</div>
}

const mapStateToProps = (state: RootState) => {
  return { success: state.success }
}

export default connect(mapStateToProps)(Input)
