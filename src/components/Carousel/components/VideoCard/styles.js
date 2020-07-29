import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 350px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;


  transition: opacity .3s;
  &:hover,
  &:focus {
 
    margin-left: 20px;
    margin-right:20px;
    transform: scale(1.1);
    transition: all 0.3s ease-in;
  }
  

}
`;

