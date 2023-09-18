import styled from "styled-components";

const HeadCon = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;

  & .head_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

function Header() {
  return (
    <HeadCon>
      <div className="head_inner">
        <div className="head_logo">LOGO</div>

        <a href="#" className="login_btn">
          <span>로그인</span>
        </a>
      </div>
    </HeadCon>
  );
}

export default Header;
