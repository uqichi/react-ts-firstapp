import * as React from 'react'
import styled from 'styled-components'
import Button from './component/Button'
import Text from './component/Title'
import Task from './component/Task'
import TaskList from './component/TaskList'

// const App: React.SFC = props => (
//     <RedText className="yaaa">H1ello, React---!!</RedText>
// )

const Component: React.SFC = () => (
    <>
        <Text>To do list</Text>
        <Button>register</Button>
        <TaskList>
            <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
            <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
            <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
        </TaskList>
    </>
)


export default Component