import styled from 'styled-components';
import LogoLost from '../LogoLost';

const FooterLost = styled.footer`


    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    font-size: 12rem;
    padding: 10rem 0;
    border-top: 3px solid var(--color-primary-medium);

    & > ${LogoLost}{
        margin-bottom: 10rem
    }

`;

export default FooterLost;