import {useState , useEffect} from "react"
function Login(){
    const [inputs, setInputs] = useState({
        username : "",
        password : "",
    })

    useEffect(()=>{
            document.title = `SafeZone PPE Store | Login`;
        }, []);

    function handleClick(e) {
        e.preventDefault();

        if(!inputs.username.trim()){
            alert("Please enter your username");
            return;
        }
        if (inputs.password.length < 6 || inputs.password.length > 15) {
            alert("Password must be at least 6 characters and cannot exceed 15 characters");
            return;
        }   

        alert("Login Successfully");
    }
    return(
        <section className = "login">
            <form>
                <h2>Login</h2>

                <input type= "text" placeholder="Username" className="username"
                value={inputs.username} 
                onChange={(e)=>setInputs({...inputs, username : e.target.value})}
                />

                <input type="password" placeholder="Password" className="pw"
                value={inputs.password} 
                onChange={(e)=>setInputs({...inputs, password : e.target.value})}
                />
                <button type="submit" onClick={handleClick}>Login</button>
            </form>
        </section>
    )
}
export default Login;
