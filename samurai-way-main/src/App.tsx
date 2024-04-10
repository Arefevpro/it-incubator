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
          <li><a href="#c">Music</a></li>
          <li><a href="#c">Settings</a></li>  
        </ul>
      </nav>
      <main className="content">
        <div><img src="https://rd-prod.twic.pics/2023-09-06/PHdX6azeavPRGpPDFxXDB3e5TSoPGFOUZiEuqJLB.webp?twic=v1/resize=828/quality=73/focus=auto" alt="" /></div>
        <div>
          <div>img</div>
          <div>description</div>
        </div>
        <div>
          <h2>my posts</h2>
          <div>new post</div>
          <div>post1</div>
          <div>post2</div>
          <button>sedd</button>
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
