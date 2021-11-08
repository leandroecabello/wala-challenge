import React from "react";
import styled from "styled-components";
import SingleCard from "./Card";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const List = () => {
  return (
    <ListContainer>
      <div>
        <div>
          <TitleContainer>
            <ListTitle>Title</ListTitle>
          </TitleContainer>
        </div>
        <div>
          <SingleCard />
        </div>
      </div>
    </ListContainer>
  );
};

export default List;
