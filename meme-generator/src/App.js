import './App.css';
import Main from './components/mainuserinput';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/make-it-meme.png'}
                  alt="Meme Generator Logo" width="46px" />
          </div>
          <div className="App-title">
            Meme Generator
          </div>
        </div>
        <div className="head-right">
          React Project - 3
        </div>
      </header>
      <section className="mainbody">
        <Main />
      </section>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
