import React from 'react'
import { connect } from 'react-redux'

interface Props {}

const Input: React.FC<Props> = () => {
  return <div data-test="component-input"></div>
}

const mapStateToProps = (state: RootState) => {
  return {}
}

export default connect(mapStateToProps)(Input)
