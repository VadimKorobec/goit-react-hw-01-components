import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 80px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 70px;
  border-radius: 5px;
  background-color: #9370db;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700px;
`;
