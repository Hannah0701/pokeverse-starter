import useSWR, { fetcher } from "./swr.js";
import Header from "./Header.jsx";
import PokemonCard from "./PokemonCard.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);

  let output;

  if (error) {
    output = <p>Failed to load Pokémon. Try again later.</p>;
  } else if (isLoading) {
    output = <p>Loading...</p>;
  } else {
    output = (
      <Container className="my-4">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="gy-4">
          {data.results.map((pokemon) => (
            <Col>
              <PokemonCard key={pokemon.name} url={pokemon.url} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Header />
      {output}
    </>
  );
}

export default App;
