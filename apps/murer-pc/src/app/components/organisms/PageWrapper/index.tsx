import styled from "styled-components";
import { Navbar } from "apps/murer-pc/src/app/components/organisms";
type PageWrapperProps = {
  children: React.ReactNode; // 👈️ type children
};
interface PageWrapper {}

type props = PageWrapperProps | PageWrapper;

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const PageWrapper: React.FC<props> = ({}) => {
  return <Wrapper></Wrapper>;
};
export default PageWrapper;
