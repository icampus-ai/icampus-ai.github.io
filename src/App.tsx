import './index.css';
import './App.css';

function App() {

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
            color: #333;
          }
          header {
            background-color: #4CAF50;
            color: white;
            padding: 15px 0;
            text-align: center;
          }
          nav {
            display: flex;
            justify-content: center;
            background-color: #333;
          }
          nav a {
            padding: 14px 20px;
            text-decoration: none;
            color: white;
            text-align: center;
            font-size: 18px;
          }
          nav a:hover {
            background-color: #ddd;
            color: black;
          }
          .main-content {
            text-align: center;
            padding: 50px 20px;
          }
          .main-content h1 {
            font-size: 48px;
            color: #333;
          }
          .main-content p {
            font-size: 18px;
            margin-top: 20px;
            line-height: 1.6;
          }
          footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 15px;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        `}
      </style>
      <header>
        <h1>Welcome to iCampus</h1>
      </header>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <div className="main-content">
        <h1>Your Digital Campus Assistant</h1>
        <p>
          iCampus is an AI-powered platform that streamlines university workflows, providing assistance with exams, grant management, offer letters, and more. Let iCampus handle the administrative tasks, so you can focus on what matters most!
        </p>
      </div>
      <footer>
        <p>&copy; 2024 iCampus | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;