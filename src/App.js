import GlobalStyle, { Container, Header, Row } from "./globalStyles";
import Dropdown from "./components/dropdown/dropdown";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header color='red'>dropdown tutorial</Header>
        <Row justify='center' align='center' mt='4rem'>
          <Dropdown />

        </Row>
      </Container>
    </>
  );
}

export default App;
