import styled from "styled-components";

import { Header, Content, Footer } from "./Components";
import { colors } from "./Utils/colors";

function App() {
  return (
    <GreyFrame>
      <WhiteInnerFrame>
        <Header />
        <Content />
      </WhiteInnerFrame>
      <Footer />
    </GreyFrame>
  );
}

export default App;

const GreyFrame = styled.div`
  background: ${colors.grey1};
  height: auto;
  padding: 1rem;
  margin: 2rem;
  border-radius: 3px;
`;

const WhiteInnerFrame = styled.div`
  height: 78vh;
  margin: 1rem 2rem;
  border-radius: 3px;
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
`;
