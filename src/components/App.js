import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {

  const [error,setError] = useState({});

  const [user, setUser] = useState({
    name: '',
    address: '',
    email: '',
    mobile: '',
  });

  const {name,email,address,mobile} = user;

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(user.name)) {
      newErrors.name = 'Name should contain only letters';
    }

    if (/[^A-Za-z0-9\s]/.test(user.address)) {
      newErrors.address = 'Address should not contain special characters';
    }

    if (!user.email.includes('@') || !user.email.endsWith('.com')) {
      newErrors.email = 'Email should contain @ and .com';
    }

    if (user.mobile.length > 10) {
      newErrors.mobile = 'Mobile number should not be more than 10 characters';
    }

    return newErrors;
  };

  function updateFields(e){
    let value = e.target.value;
    let key = e.target.name;

    setUser({...user, [key] : value})
}



  function handleSubmit(e) {
    e.preventDefault();

    let validateError = validate();
    setError(validateError);


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={updateFields} />
          {error.name && <div className="errorMessage">{error.name}</div>}
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" onChange={updateFields} />
          {error.address && <div className="errorMessage">{error.address}</div>}

        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={updateFields} />
          {error.email && <div className="errorMessage">{error.email}</div>}

        </div>
        <div>
          <label>Mobile</label>
          <input type="number" name="mobile" onChange={updateFields} />
          {error.mobile && <div className="errorMessage">{error.mobile}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
