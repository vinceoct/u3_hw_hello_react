export default function Hello (props) {
    return (
    <div>
        <h1> Hello {props.name} </h1>
        <button onClick={props.reminder}> Remember </button>
    </div>
    )
}