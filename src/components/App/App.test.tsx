import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("renders learn react link", () => {
  const container = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(container).toBeTruthy();
});
