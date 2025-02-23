import { AppSSR } from "./App.ssr.tsx";

function render(url: string) {
  return <AppSSR url={url} />;
}

export { render }