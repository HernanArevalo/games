/* eslint-disable import/no-anonymous-default-export */
import css from 'styled-jsx/css'
import { breakpoints, colors, fonts } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
    html,
    body {
        background-image: 
        radial-gradient(${ backgroundColor } 1px, #fdfdfd 1px),
        radial-gradient(${ backgroundColor } 1px, #fdfdfd 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-family: ${ fonts.base };
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    textarea, input{
        font-family: ${ fonts.base };
    }
`


export default css`
    div{
        display: grid;
        height: 100vh;
        place-items: center;
        background: ${ colors.blue };
    }
    main{
        background: ${ colors.red };
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        position: relative;
        width: 100%;
    }
    @media (min-width: ${breakpoints.mobile}){
        main {
        height: 90vh;
        width: 900px;
        }
    }
`