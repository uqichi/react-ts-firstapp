import * as React from 'react'
import styled from 'styled-components'
import colors from '../constant/colors'

import Button from './Button'

type Props = {
    value: string
    onChangeValue: (value: string) => void
    onClickAddTask: () => void
}

const AddTaskForm: React.SFC<Props> = ({ value, onChangeValue, onClickAddTask, ...props }) => (
    <Outer {...props}>
        <Input type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
        <AddButton onClick={e => onClickAddTask()}>ADD</AddButton>
    </Outer>
)

const Outer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    border: solid 1px ${colors.primary};
`

const Input = styled.input`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 16px;
    height: 100%;
    flex-grow: 1;
    border-style: none;
    color: ${colors.primary};

    &.focus {
        outline: 0;
    }
`

// extends button component
const AddButton = styled(Button)`
    height: 100%;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    background-color: ${colors.primary};
    color: white;
`

export default AddTaskForm