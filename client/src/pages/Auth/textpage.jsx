import { useUser } from "../../context/usercontext";

function TestPage() {
    let {user} = useUser()
    console.log(user);
    return ( <div>
    hello {user && user.username}

    </div> );
}

export default TestPage;