import { Fragment, memo } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

/*
  Mana shu figmani 2 ta page Validation va Language bilan birga qilamiz.
  
  https://www.figma.com/design/SuCay11wo7yZaPLKffLjrW/SIGN-IN-UP?node-id=0-1&t=5xlphDbgoVbboBH7-0
*/

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Login />
      </main>
      <Footer />
    </Fragment>
  );
};

export default memo(App);
