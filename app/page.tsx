import { PContainer } from "app/components";
import { About, Presentation } from "./components";

export default function Home() {
  return (
    <PContainer>
      <Presentation />
      <About />
    </PContainer>
  );
}
