import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@1,400;1,500;1,600;1,700&display=swap');
	
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        font-size: 100%;
    }

    body{
        background-color: whitesmoke;
        font-family: 'Finlandica', sans-serif;
    }
`;
