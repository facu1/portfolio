import { PContainer } from "app/components";
import { About, Contact, Portfolio, Presentation } from "./components";

export default function Home() {
  return (
    <PContainer>
      <Presentation />
      <About />
      <Portfolio />
      <Contact />
    </PContainer>
  );
}
