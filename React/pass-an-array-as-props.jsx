const List = (props) => {
  { /* ch[ange code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks = {["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks = {["walk dog", "workout", "Eat"]} />
        { /* change code above this line */ }
      </div>
    );
  }
};
