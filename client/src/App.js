import React from "react";
import styled from "styled-components";
import List from "./components/List";
import "./App.css";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div className='App'>
      <h1>Task-app</h1>
      <ListsContainer>
        <List />
      </ListsContainer>
    </div>
  );
}

export default App;
