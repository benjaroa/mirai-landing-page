import "./App.css";
import { TopHeader } from "./components/TopHeader.tsx";
import { MainContent } from "./components/MainContent.tsx";
import { NewFooter } from "./components/NewFooter.tsx";
import { TopButtons } from './components/TopButtons';

const App = () => {
  return (
    <main className="mt-16">
      <TopButtons />
      <TopHeader />
      <MainContent />
      <NewFooter />
    </main>
  );
}

export default App;
