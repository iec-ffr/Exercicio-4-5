import React from "react";
import { Route } from "react-router-dom";
import { InCart } from "./components";
import { Home } from "./views/Home";
import { Cart } from "./views/Cart";
import { Detail } from "./components/Detail";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/details/:id" exact component={Detail} />
  </>
);
