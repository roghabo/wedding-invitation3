import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "../pages/404";
import { GuestBook } from "../pages/guestBook";
import { Main } from "../pages/main";
import GuestBookImg from "../images/guest_main_img.png";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path={`/${process.env.REACT_APP_PATH}`} exact>
          <GuestBook
            img={GuestBookImg}
            date="October 12, 2019"
            name="Youngseok x Suji"
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
