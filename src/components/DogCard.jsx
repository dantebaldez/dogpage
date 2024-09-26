import styled from 'styled-components';

const Card = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 10px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const DogCard = ({ imageUrl }) => (
  <Card>
    <img src={imageUrl} alt="Cão" />
  </Card>
);

export default DogCard;
