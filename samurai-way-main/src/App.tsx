import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header>
        <img
          src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
          alt="logo"
          width="100px"
          height="100px"
        />
      </header>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>Photo</li>
        </ul>
      </nav>
      <main>
        Main content
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
