import { PContainer } from "app/components";
import { About, Portfolio, Presentation } from "./components";

export default function Home() {
  return (
    <PContainer>
      <Presentation />
      <About />
      <Portfolio />
    </PContainer>
  );
}
