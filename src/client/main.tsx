import { hydrateRoot } from 'react-dom/client';
import { AppCSR } from "./App.csr";

hydrateRoot(
  document.getElementById('root')!,
    <AppCSR />
);