// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { fetcher } from "./swr.js";

function PokemonCard(props) {
    const { data, error, isLoading } = useSWR(props.url, fetcher);

    if (error) {
        return <Card>Error loading Pokémon. Try again later.</Card>;
    };
    if (isLoading) {
        return <Card>Loading...</Card>;
    };

  return (
    <Card >
      <Card.Img variant="top" src={data.sprites.front_default} />
      <Card.Body>
        <Card.Title className="text-capitalize">{data.name}</Card.Title>
        <Card.Text>
            {data.types.map((type) => type.type.name).join(", ")}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;