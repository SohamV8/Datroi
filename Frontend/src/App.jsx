import { Button } from "./components/ui/button";
import { TextAnimate } from "./components/ui/text-animate";

const App = () => {
  return (
    <div>
      <Button>Shadcn</Button>
      <TextAnimate animation="blurInUp" by="character">
        Blur in by character
      </TextAnimate>
    </div>
  );
};

export default App;
