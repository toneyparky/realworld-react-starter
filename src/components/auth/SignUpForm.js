import React from 'react';

function SignUpForm({onChangeName, onChangeEmail, onChangePassword, onSignUpHandler}) {


  return (
    <form>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="text" placeholder="Your Name" onChange={onChangeName}/>
      </fieldset>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={onChangeEmail}/>
      </fieldset>
      <fieldset className="form-group">
        <input className="form-control form-control-lg" type="password" placeholder="Password"
               onChange={onChangePassword}/>
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right" onClick={(event) => onSignUpHandler(event)}>
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
