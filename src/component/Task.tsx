import * as React from 'react'
import styled from 'styled-components'

import Button from './Button'

type Props = {
    completed?: boolean
    onClickOperation: () => void
}

const Task: React.SFC<Props> = ({completed, onClickOperation, children, ...props}) => (
    <Wrap {...props}>
        <TaskTitle className={completed ? 'strike' : null}>{children}</TaskTitle>
        <Button onClick={e => onClickOperation()}>DONE</Button>
    </Wrap>
)

const Wrap = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 24px;
    margin: 0;
`

const TaskTitle = styled.div`
    &.strike {
        text-decoration: line-through;
    }
`

export default Task