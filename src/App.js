import React, { Component } from 'react';
import styled from "styled-components"
import Result from "./Result"

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
  padding-left: 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #3857B5;
  border: none;
  flex: 1;
  margin-right: 20px;
  height: 35px;
  border: 2px solid rgba(1,1,1,0.1);
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
`

const SearchButton = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #3857B5;
  color: #ffffff;
  font-size: 23px;
  font-weight: 600;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
`

const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <SearchBar placeholder="search for a topic" className="searchBar"/>
          <SearchButton className="searchButton">lets go</SearchButton>
        </Header>
        <Results>
          <Result url="https://reactjs.org/" upvotes={5} downvotes={2}/>
        </Results>
        <style>
          {`
            .searchBar:focus {
              outline: none;
              transform: scale(1.02);
            }
            .searchBar:hover {
              transform: scale(1.02);
              box-shadow: rgba(63, 63, 63, 0.08) 0 5px 10px 0;
            }
            .searchButton:hover {
              transform: scale(1.03);
              cursor: default;
              box-shadow: rgba(63, 63, 63, 0.08) 0 5px 10px 0;
            }
          `}
        </style>
      </AppWrapper>
    );
  }
}

export default App;
