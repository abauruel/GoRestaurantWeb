import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 30px auto;
    padding: 0 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1280px) {
      padding: 0 0 120px;
      margin: 30px;
      width: auto;
    }

    @media (max-width: 560px) {
      flex-direction: column;
      padding: 0 0 60px;
      margin: 30px;

      nav {
        margin-top: 20px;
        margin: 30px auto;
      }
    }
    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
