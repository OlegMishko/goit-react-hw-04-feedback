import PropTypes from 'prop-types';
import { Statlist, StatItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Statlist>
      <StatItem>good:{good}</StatItem>
      <StatItem>neutral:{neutral}</StatItem>
      <StatItem>bad:{bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </Statlist>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};