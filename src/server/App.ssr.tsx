import { StaticRouter } from "react-router";
import { App } from "../App.tsx";

type Props = {
  url: string;
};

export const AppSSR = ({ url }: Props) => {
  return (
    <StaticRouter location={url}>
      <p>今はSSRです</p>
      <App />
    </StaticRouter>
  );
};
