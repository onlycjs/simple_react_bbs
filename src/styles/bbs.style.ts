import styled from "styled-components";

export const ListTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-top: 3px solid #000;
  border-bottom: 1px solid #e2e2e2;

  & th,
  & td {
    padding: 10px;
    font-size: 16px;
    color: #222;
    text-align: center;
    border: 1px solid #e2e2e2;
  }

  & th:first-child,
  & td:first-child {
    border-left: 0;
  }
  & th:last-child,
  & td:last-child {
    border-right: 0;
  }

  & th {
    font-weight: 700;
    background-color: #f7f7f7;
  }
`;

export const ListBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const EnterWrap = styled.div`
  margin: 30px 0;

  & .enter_item {
    display: flex;
    flex-direction: column;

    & + .enter_item {
      margin-top: 30px;
    }

    & .item_title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 500;
    }

    & .enter textarea {
      height: 300px;
    }
  }
`;
