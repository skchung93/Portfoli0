import React, { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setName(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    

    setName('');
    
    setEmail('');
  };

    return (
<div id="contact">
    <hr></hr>
    <h2>
        Contact Me
    </h2>

    <div className= "d-flex justify-content-center">
    <div className="card bg-dark" style={{width:"25rem"}}>
    <form className="form">
    <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input value={email} onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input value={name} onChange={handleInputChange} name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
    <div className="card-footer">
        <button type="button" onClick={handleFormSubmit}>Send Message</button>
    </div>
  </div>
  </form>
  </div>
</div>
</div>
    )
}

export default Contact