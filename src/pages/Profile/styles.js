import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            margin-top: 12px;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #f64c75;
            align-self: flex-start;
            margin: 5px 0 10px;
        }

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 20px 0 10px;
        }

        button {
            margin: 12px 0 15px 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            border: 0;
            color: #fff;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.06, '#3b9eff')};
            }
        }

        a {
            color: #fff;
        }
    }

    > button {
        width: 100%;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        border: 0;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.06, '#f64c75')};
        }
    }
`;
