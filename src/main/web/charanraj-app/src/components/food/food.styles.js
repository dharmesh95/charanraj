import { FormControl, Typography } from "@material-ui/core";
import styled, { css } from "styled-components";

const DetailsHeader = css`
  color: rgba(0, 0, 0, 0.54);
`;
const PermissioDenied = css`
  padding-left: 24px;
`;

export const HeaderDiv = styled.div`
  ${DetailsHeader}
`;

export const PermissionDeniedHeaderTypography = styled(Typography)`
  ${DetailsHeader}
  ${PermissioDenied}
`;

export const FoodFormControl = styled(FormControl)`
  margin-bottom: 16px !important;
  width: 70%;
`;
