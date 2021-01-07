import React from 'react'
import { connect } from 'react-redux'

interface Props {}

const Input: React.FC<Props> = () => {
  return (
    <div data-test="component-input">
      <form>
        <input data-test="input-box" type="text" />
        <button data-test="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {}
}

export default connect(mapStateToProps)(Input)
