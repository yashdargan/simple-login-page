import './loginpage.css';

const Loginpage = () => {
  return (
    <div className='main_box'>
      <div className='context'>
        <h1 className='header'>Login</h1>
        <div className='detailsection'>
          <input className='text' type='email' placeholder='Username' />
          <input className='text' type='password' placeholder='Password' />
          <button className='btn'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginpage;
