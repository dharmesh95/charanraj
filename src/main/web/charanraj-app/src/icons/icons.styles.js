import { Fab, IconButton } from "@material-ui/core";
import styled, { css } from "styled-components";

export const Icons = css`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

export const IconSvg = styled.svg`
  ${Icons}
`;

export const VoteIconSvg = styled.svg`
  fill: ${props => props.fill || "grey"};
  margin-right: 5px;
  height: 20px;
`;

export const PaperPlaneSvg = styled.svg`
  margin-left: 10px;
  height: 15px;
  fill: white;
`;

export const BellIconSvg = styled.svg`
  width: 24px;
  fill: white;
  vertical-align: middle;
  padding-left: 10px;
`;

export const CheckIconSvg = styled.svg`
  width: 25px;
  fill: green;
`;

export const DownloadIconSvg = styled.svg`
  margin-right: 10px;
  height: 18px;
  fill: white;
`;

export const TimesIconSvg = styled.svg`
  margin-left: 15px;
  width: 25px;
  fill: red;
`;

export const AddIconFab = styled(Fab)`
  margin-top: 14px;
`;

export const ToolsIconSvg = styled.svg`
  margin-left: 10px;
  fill: white;
  height: 15px;
`;

export const SaveIconSvg = styled.svg`
  margin-left: 10px;
  fill: white;
  height: 15px;
`;

export const RequestIconButton = styled(IconButton)`
  padding: 5px !important;
  margin-right: 5px !important;
  margin-bottom: 5px !important;
`;
