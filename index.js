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
                text: 'learn about crypto',
                isCompleted: false
            },
            {
                text: 'learn about blockchain',
                isCompleted: false
            }
    ]);
    return(<>
        {todos.map((todo,i) => <div className="todo" key={i}>{todo.text}</div>)}
    </>);
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)