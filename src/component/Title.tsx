import * as React from 'react'
import styled from 'styled-components'

const Title: React.SFC = ({children, ...props}) => {
    return (<Text {...props}>{children}</Text>)
}

const Text = styled.h1`
    font-weight: bold;
    font-size: 48px;
`

export default Text