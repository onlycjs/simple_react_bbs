import CcContainer from "../Components/Container";
import CcBtn from "../Components/Button";
import * as S from "../styles/bbs.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface boardProps {
  id: number;
  title: string;
  registerId: string;
  registerDate: string;
}

function BoardList() {
  const navigate = useNavigate();
  const onWriteClick = () => {
    navigate("/write");
  };

  useEffect(() => {
    axios.get('http://localhost:8000/list').then(res => console.log(res))
  });

  const [tableData, setTableData] = useState<boardProps[]>([]);

  return (
    <>
      <CcContainer>
        <S.ListTable>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody></tbody>
        </S.ListTable>

        <S.ListBtnContainer>
          <CcBtn onClick={onWriteClick}>
            <span>등록하기</span>
          </CcBtn>
          <CcBtn btncolor="gray" style={{ marginLeft: "auto" }}>
            <span>수정하기</span>
          </CcBtn>
          <CcBtn btncolor="red">
            <span>삭제하기</span>
          </CcBtn>
        </S.ListBtnContainer>
      </CcContainer>
    </>
  );
}

export default BoardList;
