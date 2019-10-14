import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    background: #fff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-radius: 1px solid #eee;
        }

        a {
            font-weight: bold;
            color: #7159c1;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div``;
