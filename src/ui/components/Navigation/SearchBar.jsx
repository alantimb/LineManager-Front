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
        background-color: green;
    }
`;
