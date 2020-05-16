import React from 'react';

const TodoHeader = (props) => {
    const checkItemsLength = []
    props.checkedItems.forEach(res => {
        if(res === true){
            checkItemsLength.push(res)
        }
    })
    console.log(props.checkedItems, 'cclenght')
    console.log(checkItemsLength, 'checkItemsLength')
    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
        return (
            <div className='container' style={style}>
                <div className=''>
                    <span className='font-size18'>Total Task: </span>
                    <span className='font-size20'>{props.tasks.length}</span>
                </div>
                <div>
                    <span className='font-size18'>Complete Task: </span>
                    <span className='font-size20'>{checkItemsLength.length}</span>
                </div>
            </div>
        );
}

export default TodoHeader;