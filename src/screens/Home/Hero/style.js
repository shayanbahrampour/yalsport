import styled from 'styled-components';
import { Text } from '../../../components/UIkit/Text/Text';

export const Section = styled.section``;

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled(Text)`
  margin-bottom: 24px;
  margin-top: 24px;

  span {
    color: #0090ff;
  }
`;

export const Subtitle = styled(Text)`
  span {
    font-weight: 500;
    color: #0090ff;
  }
`;
