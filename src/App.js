import Home from "./component/Home";
import "./styles.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}
