function TodoItem({ todoText, TodoDate }) {
    return (
        <>
            <div class='row'>
                <div class='col-4'>
                    {todoText}
                </div>
                <div class='col-4'>
                    {TodoDate}
                </div>
                <div class='col-2'>
                    <button class='btn btn-danger'> DELETE</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem