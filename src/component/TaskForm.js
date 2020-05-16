import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min';


class TaskForm extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <form className='white' action="" onSubmit={this.props.handleSubmit.bind(this)}>
                        <h2 className="text-grey center marginTop">Today Tasks</h2>
                        <div className='row'>
                            <div className='col l12 s12 input-field'>
                                <label htmlFor="title">Enter your task...</label>
                                <input type="text"
                                       required
                                       value={this.props.taskValue}
                                       id='title'
                                       name='title'
                                       onChange={this.props.handleChange.bind(this)} />
                            </div>

                            <div className='col l12 s12 input-field center '>
                                <button type='submit' className='btn btn-large blue z-depth-2'>Go to List</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;