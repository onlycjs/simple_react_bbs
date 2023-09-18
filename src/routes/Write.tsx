import CcContainer from "../Components/Container";
import CcBtn from "../Components/Button";
import * as S from "../styles/bbs.style";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const submitTest = () => {
  Axios.get("http://localhost:8000/", {}).then(() => {
    alert("등록 완료!");
  });
};

function Write() {
  return (
    <>
      <CcContainer>
        <S.EnterWrap>
          <div className="enter_item">
            <div className="item_title">제목</div>
            <div className="enter">
              <label htmlFor="bbs_title">
                <input id="bbs_title" type="text" placeholder="제목 입력" />
              </label>
            </div>
          </div>
          <div className="enter_item">
            <div className="item_title">내용</div>
            <div className="enter">
              <label htmlFor="bbs_content">
                <textarea id="bbs_content"></textarea>
              </label>
            </div>
          </div>
        </S.EnterWrap>

        <S.ListBtnContainer style={{ justifyContent: "center" }}>
          <CcBtn onClick={submitTest}>
            <span>완료</span>
          </CcBtn>
          <CcBtn btncolor="gray">
            <span>취소</span>
          </CcBtn>
        </S.ListBtnContainer>
      </CcContainer>
    </>
  );
}

export default Write;
