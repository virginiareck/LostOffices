import styled from 'styled-components';
import ButtonLost from '../ButtonLost';
import LogoLost from '../LogoLost';

const HeaderLost = styled.header`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 30px 20px;
    background-color: var(--color-black-dark);
    border-bottom: 3px solid var(--color-primary-medium);
    
    @media(max-width: 500px){
        justify-content: center;
        padding: 15px 16px;

        & > ${LogoLost}{
            height: 30px;
        }



        & > ${ButtonLost}{
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
`;

export default HeaderLost;