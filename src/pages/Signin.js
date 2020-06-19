import React, {Component} from 'react';



class Signin extends Component {
    render(){
        return(
            <>  

                <section className="searchWrapper-signup">
                    <div>
                    <h1 className="Title-hero-ShareBook-signup">ShareBook</h1>
                    <form className="card-hero-signup">
                    <p className="text-signin-signup">Do you have an Account?<a href="#"> Sign UP </a>Now</p>
                    <div className="class-Reader-Saler">
                         <a className="Reader-Saler" href="#" >Reader</a>
                         <a className="Reader-Saler" href="#" >Saler</a> 
                    </div>
                    </form>
                    </div>
                    <div className="signin-signup">
                        <form className="form-signin-signup">
                            <input className="email-active-signin" type="Email" placeholder="Email" required />
                            <input type="password" placeholder="Password" />
                            <div className="Signup-link">
                                <a className="Reader-Saler" href="#" >Sign in</a>
                            </div>
                            
                        </form>
                        
                    </div>
                </section>
     
            </>
        )
    }
}
export default Signin