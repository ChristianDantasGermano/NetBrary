import "./App.css";
import 'date-fns';
import Routes from "./Router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <div>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Routes />
    </div>
  );
}
