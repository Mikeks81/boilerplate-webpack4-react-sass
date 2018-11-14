import React from 'react'
import ReactDOM from 'react-dom'
import Other from './other'
import img from './Screen Shot 2018-11-14 at 12.35.58 AM.png'
import './style.sass'

const Index = () => {
  return (
    <React.Fragment>
      <div>Hello React!!!!</div>
      <img src={img} alt='' style={{width: '100px'}} />
      <Other />
    </React.Fragment>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))
