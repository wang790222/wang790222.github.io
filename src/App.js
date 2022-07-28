import styled from "styled-components";

import { Header, Content, Footer } from "./Components";
import { colors } from "./Utils/colors";
import useWindowDimensions from "./Utils/useWindowDimensions";
import { Mobile } from "./Pages";

function App() {
  const { width } = useWindowDimensions();

  return width < 1080 ? (
    <Mobile />
  ) : (
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
