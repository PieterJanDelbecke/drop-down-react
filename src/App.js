import GlobalStyle, { Container, Header, Row } from "./globalStyles";
import Dropdown from "./components/dropdown/dropdown";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState('USD')

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header color='red'>dropdown tutorial</Header>
        <Row justify='center' align='center' mt='4rem'>
          <Dropdown currency={currency} setCurrency={setCurrency}/>

        </Row>
      </Container>
    </>
  );
}

export default App;
