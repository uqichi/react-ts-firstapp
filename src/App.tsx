import * as React from 'react'
import styled from 'styled-components'

import Task from './component/Task'
import TaskList from './component/TaskList'
import Title from './component/Title'
import AddTaskForm from './component/AddTaskForm'
import colors from './constant/colors';

// const App: React.SFC = props => (
//     <RedText className="yaaa">H1ello, React---!!</RedText>
// )

// const Component: React.SFC = () => (
//     <>
//         <Text>To do list</Text>
//         <Button>register</Button>
//         <TaskList>
//             <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
//             <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
//             <Task completed={true} onClickOperation={() => console.log('clicked')}>task</Task>
//         </TaskList>
//         <AddTaskForm>add form</AddTaskForm>
//     </>
// )

type State = {
    tasks: TaskType[]
    newTaskName: string
}

type TaskType = {
    name: string
    completed: boolean
}

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props)
        this.state = { tasks: [
            {
                name: 'mock1',
                completed: false
            },
            {
                name: 'mock2',
                completed: true
            }
        ], newTaskName:'' }
    }

    get inProgressTasks() {
        return this.state.tasks.filter(todo => todo.completed === false)
    }

    get completedTasks() {
        return this.state.tasks.filter(todo => todo.completed === true)
    }

    addTask() {
        if (this.state.newTaskName === '') return
        const changedTasks = [...this.state.tasks, { name: this.state.newTaskName, completed: false }]
        this.setState({ ...this.state, tasks: changedTasks, newTaskName: '' })
    }

    render = () => (
        <Wrapper>
            <TaskWrap>
                <Title>TODO List</Title>
                <AddTaskForm
                    value={this.state.newTaskName}
                    onChangeValue={value => this.setState({ ...this.state, newTaskName: value })}
                    onClickAddTask={() => this.addTask()}
                />
                <SpacedTaskList>
                    {this.inProgressTasks.map((todo, i) => (
                        <Task key={i} completed={todo.completed} onClickOperation={() => null}>{todo.name}</Task>
                    ))}
                </SpacedTaskList>
            </TaskWrap>
            <CompletedTaskWrap>
                <Title>Completed</Title>
                <SpacedTaskList>
                    {this.completedTasks.map((todo, i) => (
                        <Task key={i} completed={todo.completed} onClickOperation={() => null}>{todo.name}</Task>
                    ))}
                </SpacedTaskList>
            </CompletedTaskWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    *, *::after, *::before {
      box-sizing: border-box;
    }
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;

    width: 375px;
    margin: 0 auto;
    padding: 0 8px;
    color: ${colors.primary};
`

const TaskWrap = styled.div``

const SpacedTaskList = styled(TaskList)`
    margin-top: 32px;
`

const CompletedTaskWrap = styled.div`
    margin-top: 70px;
`

export default App