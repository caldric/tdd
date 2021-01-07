import React from 'react'
import { connect } from 'react-redux'

interface Props {
  success: boolean
}

const Input: React.FC<Props> = ({ success }) => {
  const renderForm = () =>
    !success ? (
      <form>
        <input data-test="input-box" type="text" />
        <button data-test="submit-button" type="submit">
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
