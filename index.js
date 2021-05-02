function App(){
    const [todos, setTodos] = React.useState([
            {
                text: 'learn react',
                isCompleted: false
            },
            {
                text: 'meet friend for lunch',
                isCompleted: false
            },
            {
                text: 'build todo app',
                isCompleted: false
            },
            {
                text: 'ride bike',
                isCompleted: false
            },
            {
                text: 'cook dinner',
                isCompleted: false
            }
    ]);

    const addTodo = text =>{
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const colorAl = index =>{
        let classN = ''
        if (index%2==0){
             classN ='text-primary';
        }else{ classN = 'text-secondary'}
        return classN;
    }

    const removeTodo = index =>{
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return(
        <div className="card cardWidth">
            <div className="card-body">
            <h1>ToDos &darr;</h1>
            {todos.map((todo,i) => 
                <ToDo index={i} key={i} todo={todo} remove={removeTodo} cName={colorAl(i)}/>
                )}
            <TodoForm addTodo={addTodo}/>
            </div>
        </div>);
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)