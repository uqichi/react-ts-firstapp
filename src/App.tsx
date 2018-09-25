import * as React from 'react'
import styled from 'styled-components'

const App: React.SFC = props => (
    <RedText className="yaaa">H1ello, React---!!</RedText>
)

const RedText = styled.div`
    color: red;
`

export default App