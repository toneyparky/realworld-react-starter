import React, {useState} from "react";
import SignUpForm from "../components/auth/SignUpForm";

const Auth = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSignUpHandler = async (event) => {
    event.preventDefault()
    console.log("hi")

    const body = {
      "user": {
        "username": name,
        "email": email,
        "password": password
      }
    }

    const response = await fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...body
      })
    })
    const content = await response.json()
    const token = await content.user.token
    localStorage.setItem("token", token)
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>
            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>
            <SignUpForm
              onChangeName={onChangeName}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onSignUpHandler={onSignUpHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;
