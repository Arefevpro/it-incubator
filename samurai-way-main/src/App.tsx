import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
          alt="logo"
          width="100px"
          height="100px"
        />
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#c">Profile</a></li>
          <li><a href="#c">Messages</a></li>
          <li><a href="#c">Photo</a></li>
        </ul>
      </nav>
      <main className="content">
        Main content
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
