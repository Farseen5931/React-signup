import '../css/styleform.css'

function Sform(){
    return(
        <div>
        <div className="container">
            <h2>Sign Up</h2>
            <form id="signupform">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="username" 
                    required 
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                />

                <label htmlFor="mobile">Mobile:</label>
                <input 
                    type="mobile" 
                    id="mobile" 
                    name="mobile" 
                    required 
                />


                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    required 
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Sform