import { Card } from 'react-bootstrap';


function Cards({ user }) {

    const { image,username,firstname,lastname,email } = user
   
   
    
    return (
      
      <Card className='text-center mx-auto mt-1 mb-1' style={{ width: '55%'}} >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text> {firstname} {lastname}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-body-secondary'>
          {email}
        </Card.Footer>
  
      </Card>
    );
  }

export default Cards;