import React from 'react';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min';

const Todo = (props) => {
    function handleClick(event) {
        props.handleDelete(event, props.index); // pass any argument to the callback
    }
    const checked = props.checkedItems.get(props.task)
    const style = {
        textDecoration: checked ? 'line-through' : 'none',
        color: checked ? 'black' : '',
    };
        return (
            <div className='container list z-depth-2'>
                <div className='listItem'>
                    <label>
                        <input type="checkbox" name={props.task}
                               checked={props.checkedItems.get(props.task)}
                               onChange={props.onCheck}
                        />
                        <span className='task' style={style}>{props.task}</span>
                    </label>
                </div>
                    <a className="btn-floating pulse black ">
                        <i className="material-icons" onClick={handleClick}>delete</i>
                    </a>
            </div>
        );
}

export default Todo;