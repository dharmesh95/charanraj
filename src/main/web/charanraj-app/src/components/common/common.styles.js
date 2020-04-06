import { ExpansionPanelDetails, ListItemAvatar, ListItemText, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";

export const StyledListItemAvatar = styled(ListItemAvatar)`
  min-width: 44px;
`;

export const StyledListItemText = styled(ListItemText)`
  padding-left: 10px;
`;

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  padding: 0px !important;
  display: block;
`;

export const AvatarImg = styled.img`
  height: 30px;
  border-radius: 50%;
`;

export const StyledTextFied = styled(TextField)`
  width: 100%;
`;

export const RoleTypography = styled(Typography)`
  font-size: 12px !important;
  color: rgba(0, 0, 0, 0.54);
`;

export const NoDataDiv = styled.div`
  padding: 8px 24px 24px;
  color: rgba(0, 0, 0, 0.54);
`;
