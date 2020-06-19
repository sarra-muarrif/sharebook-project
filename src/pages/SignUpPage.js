import React, {Component} from 'react';

class SignUpPage extends Component {
    render(){
        return(
            <>  
                <section className="searchWrapper-signup">
                    <div>
                    <h1 className="Title-hero-ShareBook-signup">ShareBook</h1>
                    <form className="card-hero-signup">
                    <p className="text-signin-signup">Do you have an Account?<a href="/sign-in"> Sign In </a>Now</p>
                    <div className="class-Reader-Saler">
                         <a className="Reader-Saler" href="sign-up" >Reader</a>
                         <a className="Reader-Saler" href="/seller" >Seller</a> 
                    </div>
                    </form>
                    </div>
                    <div className="signin-signup">
                        <form className="form-signin-signup">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" /><br/>
                            <input className="email-active-" type="Email" placeholder="Email" required /><br/>
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" /><br/>
                            <div className="Signup-link">
                                <a className="Reader-Saler" href="#" >Sign UP</a>
                            </div>

                        </form>

                    </div>
                </section>
            </>
        )
    }
}
export default SignUpPage;