import styled from "styled-components";

import { Header, Content, Footer } from "./Components";
import { colors } from "./Utils/colors";

function App() {
  return (
    <WhiteInnerFrame>
      <Header />
      <Content />
      <Footer />
    </WhiteInnerFrame>
  );
}

export default App;

const WhiteInnerFrame = styled.div`
  border-radius: 3px;
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
`;
