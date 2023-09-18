import styled from "styled-components";

const CcContainer = styled.div<ContainerProps>`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 50px;
`;

interface ContainerProps {
  children: object;
}

function Container(props: ContainerProps): React.ReactElement {
  const { children } = props;

  return <CcContainer>{children}</CcContainer>;
}

export default Container;
