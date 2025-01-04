import Person from "./Person"

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps)=>{
    const {messageCount = 0} = props;
    const personName = {
        first:'Bruce',
        last:'Wayne'
    }
    return(
        <div>
            <h1> {props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages</h1>` : "Welcome Guest" } </h1>
            <Person name={personName} />
        </div>
    )
}

export default Greet;