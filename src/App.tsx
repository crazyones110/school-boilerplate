import React, { useState } from 'react'
import styled from 'styled-components'
import {Tip} from 'Tips'
import {Button} from 'antd'
import './App.css'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`
const App: React.FC = () => {
  const [tipStatus, setTipStatus] = useState(false)
  return (
    <Div>
      <h1>Hello BoilerPlate</h1>
      <Button type="primary" onClick={()=>setTipStatus(!tipStatus)}>Show Tips</Button>
      {tipStatus && <Tip />}
    </Div>
  )
}
export default App
