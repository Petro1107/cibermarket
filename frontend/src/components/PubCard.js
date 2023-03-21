import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/PubCard.css';

function PubCard({ data }) {
  return (
    <>
      <div className='cards-container'>
        {data.map((product, key) => (
          <Card style={{ width: '250px', margin: '10px' }} key={key}>
            <Card.Img
              variant='top'
              src={require(`../../../backend/images/${product.imagen}`)}
            />
            <Card.Body>
              <Card.Title>{product.nombre_producto}</Card.Title>
              <Card.Text>{product.descripcion}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <span>${product.precio}</span>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default PubCard;
