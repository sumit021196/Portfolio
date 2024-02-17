import Card from 'react-bootstrap/Card';

function BgColorExample() {
  const cardContents = [
  { variant: 'Primary', text: 'i am on monday' },
  { variant: 'Secondary', text: 'Second Card Content' },
  { variant: 'Success', text: 'Third Card Content' },
  { variant: 'Danger', text: 'i am on  Friday' },
];
 
 
  return (
    <>
     
     {cardContents.map(({variant,text}) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
        <Card.Header>cards</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontFamily: 'Inter' }}>{variant} LEVIs</Card.Title>
          <Card.Text style={{ fontFamily: 'Inter' }}>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </>
  );
}

export default BgColorExample;