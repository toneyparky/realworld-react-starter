import React, {useState} from "react";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onLoginHandler = async (event) => {
    event.preventDefault()

    const body = {
      "user": {
        "email": email,
        "password": password
      }
    }

    const response = await fetch("https://conduit.productionready.io/api/users/login", {
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
    console.log(content)
    const token = await content.user.token
    localStorage.setItem("token", token)

    // eslint-disable-next-line no-restricted-globals
    location.href = '/'
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <LoginForm
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onLoginHandler={onLoginHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
