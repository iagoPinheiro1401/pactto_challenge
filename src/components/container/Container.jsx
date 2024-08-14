import styled from "styled-components"
import { useMenu } from "@/hooks/useMenu"

const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
  margin-left: ${props => props.isMenuOpen ? "380px" : "0px"};
  height: 100vh;
  z-index: 999;

  @media (max-width: 1280px) {
    ${props => props.isMenuOpen && `
        margin-left: 0;
        overflow-y: hidden;
        pointer-events: none;
    `}
    padding: 40px 10px;
  }
`

export default function Container({ children }) {
    const { isMenuOpen } = useMenu()

    return(
        <StyledContainer isMenuOpen={isMenuOpen}>
            {children}
        </StyledContainer>
    )
}