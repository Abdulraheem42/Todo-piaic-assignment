import React, {Component} from 'react';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TodoHeader from "./TodoHeader";
import swal from 'sweetalert'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['task1', 'task2', 'task3'],
            taskValue: '',
            checkedItems: new Map(),
        }
    }

    handleChange = (event) => {
        this.setState({
            taskValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
         const {tasks, taskValue} = this.state
        this.setState({
            tasks: [...this.state.tasks, taskValue],
            taskValue: ''
        })
    }

    handleDelete = (event, index) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const newTasks = [...this.state.tasks]
                    newTasks.splice(index, 1)
                    this.setState({tasks: newTasks})
                    swal("Poof! Your Task has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your Task is safe!");
                }
            });

    }

    handleCheck = (e) => {
        // const { name, value, checked } = e.target
        const name = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(name, isChecked),
        }));
    }

    render() {
        return (
            <div className='task-wrapper'>
                <TaskForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} taskValue={this.state.taskValue}/>
                <TodoHeader tasks={this.state.tasks} checkedItems={this.state.checkedItems} />
                <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} handleCheck={this.handleCheck} checkedItems={this.state.checkedItems}/>
            </div>
        );
    }
}

export default Task;