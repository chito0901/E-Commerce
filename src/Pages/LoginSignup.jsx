import { Link } from 'react-router-dom'
import styles from './CSS/LoginSignup.module.css'

function LoginSignup() {


    return (
        <div className={styles.loginSignup}>
            <div className={styles.loginSignupContainer}>
                <h1>Sign Up</h1>
                <div className={styles.loginSignupFields}>
                    <input type='text' placeholder='Enter your name' />
                    <input type="email" placeholder='Enter your email address' />
                    <input type='password' placeholder='Create your password'/>
                </div>
                <button className={styles.continueBtn}>Continue</button>
                <p className={styles.loginSignupLogin}>Already have an Account? <Link>Login here.</Link></p>
                <div className={styles.loginSignupAgree}>
                    <input className={styles.agreeCheckBox} type='checkbox' name='' id='' />
                    <p>By continuing, I agree to the <Link>Terms of Use</Link> & <a>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup
