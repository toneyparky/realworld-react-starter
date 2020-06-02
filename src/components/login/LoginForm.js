import React from 'react';

function LoginForm({onChangeEmail, onChangePassword, onLoginHandler}) {


  return (
    <form>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={onChangeEmail}/>
      </fieldset>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="password" placeholder="Password"
               onChange={onChangePassword}/>
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right" onClick={(event) => onLoginHandler(event)}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
