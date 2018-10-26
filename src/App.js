import React, { Component } from 'react';
import styled from "styled-components"

const AppWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`

const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(1,1,1,0.5);
  border: none;
  flex: 1;
  margin-right: 20px;
  height: 35px;
  border: 2px solid rgba(1,1,1,0.1);
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
`

const SearchButton = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #3857B5;
  color: #F0EDEE;
  font-size: 25px;
  font-weight: 600;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <SearchBar placeholder="search for a topic" className="searchBar"/>
          <SearchButton>lets go</SearchButton>
        </Header>
        <style>
          {`
            .searchBar:focus {
              outline: none;
              transform: scale(1.02);
            }
            .searchBar:hover {
              transform: scale(1.02);
            }
          `}
        </style>
      </AppWrapper>
    );
  }
}

export default App;
