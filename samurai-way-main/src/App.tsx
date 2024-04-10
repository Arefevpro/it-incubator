import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
     <Nav />
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
      <Footer />
    </div>
  );
};

export default App;
