import {useState, useEffect} from "react";
function Register () {
    const [inputs , setInputs] = useState({
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        password : "",
        gender : "male",
        conditions : false,
    });

    useEffect(()=>{
            document.title = `SafeZone PPE Store | Register`;
        }, []);

    function handleClick(e) {
        e.preventDefault();

        if (!inputs.firstName.trim()) {
            alert("Please enter your first name");
            return;
        }
        if (!inputs.lastName.trim()) {
            alert("Please enter your last name");
            return;
        }
        if(!inputs.username.trim()){
            alert("Please enter your username");
            return;
        }
        if (inputs.password.length < 6 || inputs.password.length > 15) {
            alert("Password must be at least 6 characters and cannot exceed 15 characters");
            return;
        }
        if (!inputs.email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        if (!inputs.conditions) {
            alert("You must agree to the Terms & Conditions");
            return;
        }

        alert("Registration Successfully");
    }

    return(
        <section className = "register">
            <form>
                <h2>Create Account</h2> 
                <input type= "text" placeholder="First Name" className="f-name"
                value={inputs.firstName} 
                onChange={(e)=>setInputs({...inputs, firstName : e.target.value})}
                />

                <input type= "text" placeholder="Last Name" className="l-name"
                value={inputs.lastName} 
                onChange={(e)=>setInputs({...inputs, lastName : e.target.value})}
                />

                <input type= "text" placeholder="Username" className="username"
                value={inputs.username} 
                onChange={(e)=>setInputs({...inputs, username : e.target.value})}
                />

                <input type="password" placeholder="Password" className="pw"
                value={inputs.password} 
                onChange={(e)=>setInputs({...inputs, password : e.target.value})}
                />

                <input type="email" placeholder="Email" className="email"
                value={inputs.email} 
                onChange={(e)=>setInputs({...inputs, email : e.target.value})}
                />
                

                <div className="radio">
                    <label>
                        <input type="radio" name="gender"  value= "male"
                        checked={inputs.gender === "male"}
                        onChange={(e)=> setInputs({...inputs, gender: e.target.value})}
                        /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender"  value= "female"
                        checked={inputs.gender === "female"}
                        onChange={(e)=> setInputs({...inputs, gender: e.target.value})}
                        /> Female
                    </label>
                </div>
                <div className = "conditions">
                    <input type="checkbox" checked={inputs.conditions} onChange={(e)=>setInputs({...inputs, conditions: e.target.checked})}/> 
                    <label>I agree to Terms & Conditions</label>
                </div>
                <button type="submit" onClick={handleClick}>Register</button>
            </form>
        </section>
    )
}
export default Register;
