import styled from "styled-components";

// interface BtnProps {
//   text?: string;
//   btnColor?: number | string;
// }

const ButtonColor = {
  default: {
    backgroundColor: "#99dbff",

    "&:hover": {
      outline: "0",
      borderRadius: "2px",
      boxShadow: "0 0 0 3px #fff, 0 0 0 5px #99dbff",
    },
  },

  red: {
    backgroundColor: "#ff0000",

    "&:hover": {
      boxShadow: "0 0 0 3px #fff, 0 0 0 5px #ff0000",
    },
  },

  gray: {
    backgroundColor: "#ccc",

    "&:hover": {
      boxShadow: "0 0 0 3px #fff, 0 0 0 5px #ccc",
    },
  },
};

interface BtnProps {
  btncolor?: keyof typeof ButtonColor;
  children: object;
  style?: object;
  onClick?: object;
}

const Button = styled.button<BtnProps>(({ btncolor = "default" }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "130px",
  height: "50px",
  border: "0",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "700",
  color: "#fff",

  ...ButtonColor[btncolor],

  "&:focus-visible": {
    boxShadow: "0 0 0 3px #fff, 0 0 0 5px #222",
    outline: "0",
    borderRadius: "2px",
  },
}));

function CcBtn(props: BtnProps): React.ReactElement {
  const { btncolor, children, style, onClick } = props;
  return (
    <>
      <Button btncolor={btncolor} style={style} onClick={onClick}>
        {children}
      </Button>
    </>
  );
}

export default CcBtn;
