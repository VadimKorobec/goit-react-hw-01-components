import PropTypes from 'prop-types';
import {
  Container,
  Label,
  Percentage,
  StatItem,
  StatList,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
