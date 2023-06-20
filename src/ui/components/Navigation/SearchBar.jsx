import styled from "styled-components"

export default function SearchBar() {
    return (
        <SearchBarContainer>
            <input />
        </SearchBarContainer>
    )
}

const SearchBarContainer = styled.div`
    width: 240px;
    height: 40px;
    background-color: yellow;

    input {
      width: 100%;
      height: 100%;
      margin-bottom: 12px;
      border-radius: 5px;
      border: 1px solid #999494;
      background-color: #b9c4f1;
      color: #757070;
      font-size: 18px;
      padding-left: 10px;
    }
`;
