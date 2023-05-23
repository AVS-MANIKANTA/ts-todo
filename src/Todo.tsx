import { Component, ReactNode } from "react";
import './Todo.css'

interface IState {
    task: string,
    alltasks: [],
    editIndex: number
}
interface IProps {

}
class Todo extends Component<IProps> {


    state: IState = {
        task: '',
        alltasks: [],
        editIndex: -1
    }

    handleChange = (event: any) => {
        this.setState({ task: event.target.value })
    }

    addtask = () => {
        if (this.state.task.length > 0) {
            this.setState({ alltasks: [...this.state.alltasks, this.state.task] })
        } else {
            alert('you must give task')
        }

        this.setState({ task: '' })
    }



    editTask = (index: number, updatedTask: string) => {
        const newTasks: any = [...this.state.alltasks]
        newTasks[index] = updatedTask
        this.setState({ alltasks: newTasks })
        this.setState({ editIndex: -1 })
    }

    handleEdit = (index: number) => {
        this.setState({ editIndex: index })
        this.setState({ task: this.state.alltasks[index] })
    }



    handleDelete = (index: number) => {
        const newTasks = [...this.state.alltasks]
        newTasks.splice(index, 1)
        this.setState({ alltasks: newTasks })
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.editTask(this.state.editIndex, this.state.task)
        this.setState({ task: '' })
    }





    render(): ReactNode {

        const taskElements = this.state.alltasks.map((task, index) => {
            return (
                <div className='taskElements' key={index}>
                    {this.state.editIndex === index ? (
                        <form onSubmit={this.handleSubmit}>
                            {/* <input type="text" value={task} onChange={handleChange} placeholder='addtask' name="taskName"/> */}
                            {/* <button>Edit</button> */}
                            <div className='task-content'>
                                <p style={{ width: "150px" }}>{task}</p>
                                <button onClick={() => this.handleDelete(index)} className='del-btn'> Delete task</button>
                            </div>

                        </form>
                    ) : (
                        <div className='task-content'>
                            <p style={{ width: "150px" }}>{task}</p>
                            <button onClick={() => this.handleEdit(index)} className='edit-btn'> Edit task</button>
                            <button onClick={() => this.handleDelete(index)} className='del-btn'> Delete task</button>
                        </div>
                    )}
                </div>
            )
        })


        return (
            <>
                <div className='head-content'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            placeholder='addtask'
                            name="taskName"
                            value={this.state.task}
                            onChange={this.handleChange}

                        />
                        {this.state.editIndex === -1 ? (
                            <button onClick={this.addtask}>Add task</button>
                        ) : (
                            <button>Edit task</button>
                        )}

                    </form>

                </div>

                {taskElements}
            </>
        )
    }

}

export default Todo

// function App() {
//     const [task, setTask] = useState('')
//     const [alltasks, setAllTasks] = useState([])
//     const [editIndex, setEditIndex] = useState(-1)

//     function handleChange(event) {
//         setTask(event.target.value)
//     }

//     function addtask() {
//         if (task.length > 0) {
//             setAllTasks([...alltasks, task])
//         } else {
//             alert('You must give task')
//         }

//         setTask('');
//     }

//     function editTask(index, updatedTask) {
//         const newTasks = [...alltasks]
//         newTasks[index] = updatedTask
//         setAllTasks(newTasks)
//         setEditIndex(-1)
//     }

//     function handleEdit(index) {
//         setEditIndex(index);
//         setTask(alltasks[index])
//     }

//     function handleDelete(index) {
//         const newTasks = [...alltasks]
//         newTasks.splice(index, 1)
//         setAllTasks(newTasks)
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         editTask(editIndex, task)
//         setTask('')
//     }



//     const taskElements = alltasks.map((task, index) => {
//         return (
//             <div className='taskElements' key={index}>
//                 {editIndex === index ? (
//                     <form onSubmit={handleSubmit}>
//                         {/* <input type="text" value={task} onChange={handleChange} placeholder='addtask' name="taskName"/> */}
//                         {/* <button>Edit</button> */}
//                         <div className='task-content'>
//                             <p style={{ widht: "150px" }}>{task}</p>
//                             <button onClick={() => handleDelete(index)} className='del-btn'> Delete task</button>
//                         </div>

//                     </form>
//                 ) : (
//                     <div className='task-content'>
//                         <p style={{ widht: "150px" }}>{task}</p>
//                         <button onClick={() => handleEdit(index)} className='edit-btn'> Edit task</button>
//                         <button onClick={() => handleDelete(index)} className='del-btn'> Delete task</button>
//                     </div>
//                 )}
//             </div>
//         )
//     })
//     // console.log(alltasks)

//     return (
//         <>
//             <div className='head-content'>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type='text'
//                         placeholder='addtask'
//                         name="taskName"
//                         value={task}
//                         onChange={handleChange}

//                     />
//                     {editIndex === -1 ? (
//                         <button onClick={addtask}>Add task</button>
//                     ) : (
//                         <button>Edit task</button>
//                     )}

//                 </form>

//             </div>
//             {taskElements}
//         </>
//     )
// }