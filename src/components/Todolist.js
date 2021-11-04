import React, { Fragment, useState, useRef } from 'react';

import TodoDetailList from './TodoDetailList';

const Todolist = () => {
    // 任务数组
    const [mytodolist, setMytodolist] = useState([]);
    // 输入内容
    const refTodoContent = useRef(null);
    const [txtTodoContent, setTodoContent] = useState('')
    const txtTodoContent_onchange = (event) => {
        setTodoContent(event.target.value)
    }
    const txtTodoContent_keypress = (event) => {
        if (event.key === 'Enter') {
            btn_add_click()
        }
    }
    // 追加按钮
    const btn_add_click = () => {
        const tmpTodoContent = txtTodoContent.trim();
        if (tmpTodoContent) {
            setMytodolist(prevList => {
                const newList = [...prevList];
                newList.unshift({ text: tmpTodoContent, id: Math.random().toString() });
                return newList;
            });
            setTodoContent('')
        } else {
            alert('请输入内容')
        }
        refTodoContent.current.focus();
    }
    // 删除按钮
    const btn_del_click = (itemId) => {
        setMytodolist(prevList => {
            const newList = prevList.filter(item => item.id !== itemId);
            return newList;
        });
    }

    return (
        <Fragment>
            <h1>Todolist</h1>
            <hr />
            <div className="row offset-1 col-10 d-flex justify-content-center">
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="txtTodoContent" className="form-label d-flex">我的任务</label>
                        <input type="text" className="form-control" id="txtTodoContent" placeholder="去看电影" value={txtTodoContent} onChange={txtTodoContent_onchange} onKeyPress={txtTodoContent_keypress} ref={refTodoContent} />
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={btn_add_click}>确定</button>
                    <hr className="px-3" />
                    {mytodolist.map(item => (
                        <TodoDetailList key={item.id} id={item.id} text={item.text} onDelete={btn_del_click}></TodoDetailList>
                    ))}
                </fieldset>
            </div>
        </Fragment>
    )
}

export default Todolist;