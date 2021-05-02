function ToDo({todo, index, remove, cName}){
    function handle(){
        remove(index);
    }
    return (
        <div className={cName} onClick={handle}> &rarr; {todo.text} (-)</div>
    );
}