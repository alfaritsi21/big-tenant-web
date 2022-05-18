import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Owner from "./pages/Owner/Owner";
import Business from "./pages/Business/Business";
import Account from "./pages/Account/Account";
import Payment from "./pages/Payment/Payment";
import Terms from "./pages/Terms/Terms";
import Review from "./pages/Review/Review";
import Final from "./pages/Final/Final";

function App() {
  return (
    <div>
      <div className="body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/owner" element={<Owner />} />
            <Route exact path="/business" element={<Business />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/review" element={<Review />} />
            <Route exact path="/final" element={<Final />} />
          </Routes>
          {/* <div> */}
          {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}
          {/* <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/owner">
                <Owner />
              </Route>
              <Route path="/business">
                <Business />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/review">
                <Review />
              </Route>
            </Switch>
          </div> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
