import { useState } from 'react';
import { Card } from '../Home/HomeStyles';
import { Button, LoginContainer, LoginForm } from './LoginStyles';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  password: ''
};

function Login() {
  const [form, setForm] = useState(initialValues)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.username.trim() || !form.password.trim()) {
      alert("Completa los datos");
      return
    }

    setForm(initialValues);
    navigate(`/user/${form.username}`)
  };
 
  return (
    <LoginContainer>
      <Card>
        <img
          src='https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/2022-argentinas-lionel-messi-kisses-784174076-3.jpg?strip=all&quality=100&w=1080&h=1080&crop=1'
          alt=''
        />
        <LoginForm>
          <input
            type='text'
            placeholder='Username'
            id='username'
            name='username'
            onChange={handleChange}
            value={form.username}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            onChange={handleChange}
            value={form.password}
          />
          <Button onClick={handleSubmit}>Login</Button>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
}

export default Login;
