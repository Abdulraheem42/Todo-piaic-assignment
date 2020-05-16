import React from 'react';
import Todo from "./Todo";

const TaskList = (props) =>{
        return (
            <div className='list-body'>
                {props.tasks.map((res, index) => {
                    return(
                        <Todo task={res} index={index} key={index} handleDelete={props.handleDelete} onCheck={props.handleCheck} checkedItems={props.checkedItems}/>
                    )
                })
                }

            </div>
        );
}

export default TaskList;