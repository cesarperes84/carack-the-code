import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import * as S from "./StyledModalHome";

export const ModalHome = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => (
  <>
    {isOpen && (
      <S.Container>
        <S.Paragraph>
          Crack the code. A numeric lock has 3 digit key, from 0 to 9. You have
          4 CHANCES. Pay attention to the HINT.
          <br /> Good Lucky!!!
        </S.Paragraph>
        <S.Paragraph>
          <S.Button
            variant="outlined"
            color="success"
            disableElevation
            startIcon={<PlayIcon />}
            onClick={() => setIsOpen((prev: boolean) => !prev)}
          >
            PLAY
          </S.Button>
        </S.Paragraph>
      </S.Container>
    )}
  </>
);

export default ModalHome;
