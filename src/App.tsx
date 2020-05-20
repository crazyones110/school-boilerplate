import React from 'react'
import styled from 'styled-components'
import './App.css'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { routes } from 'routes'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`
const App: React.FC = () => {
  return (
    <Router>
      <Div>
        <h1>Hello BoilerPlate</h1>
        <Link to="/tip1" style={{marginRight: 30}}>Show Vscode Tips</Link>
        <Link to="/tip2">Show Javascript Tips</Link>
        <Switch>
          {routes.map(d => (
            <Route key={d.path} component={d.component} {...d} />
          ))}
        </Switch>
      </Div>
    </Router>
  )
}
export default App
