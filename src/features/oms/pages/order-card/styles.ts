import styled from "styled-components";
import tw from "twin.macro";

export const TabButton = styled.div`
  ${tw`
    py-1 cursor-pointer text-sm font-medium flex-row items-center
  `};
  ${({ active }: any) =>
    active ? tw`border-green-500 text-green-500 border-b ` : tw``}
` as any;
