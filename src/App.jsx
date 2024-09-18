import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import data from "./data/data.json";

function App() {
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}

export default App;
