import React, { useState } from 'react'
import './FormsPage.css';
import FormProperly from '../../components/FormProperly/FormProperly';

const FormsPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    // manual validation
    if (!email.includes('@')) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 6) {
      setErrors({ ...errors, password: "Password must at least 6 chars" });
      return;
    }

    // submission
    console.log('Form submitted');
  }

  return (
    <div className="forms-container">
      <h3>Native form</h3>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-red">{errors.email}</div>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="text-red">{errors.password}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>

      <h3 style={{marginTop: '3rem' }}>React-hook-form</h3>
      <FormProperly />
    </div>
  )
}

export default FormsPage