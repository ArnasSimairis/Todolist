
const TableForTasks = (props) => {
    console.log(props.item);

    return (
        <table>
            <thead>
                <tr>
                    <th>eil.nr</th>
                    <th>uzduotis</th>
                    <th>ar uzbaigta</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.item.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.text}</td>
                            <td>{task.isCompleted ? "done" : "Still in progress..."}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableForTasks