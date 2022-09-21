import React from "react";
import { iconsShareUtil } from "../../utility/IconsShareUtil";
import * as S from "./StyledShare";

interface ShareProps {
  round: Array<string>;
  solution: string;
}

export const Share = ({ round, solution }: ShareProps) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const iconsShare = iconsShareUtil(round.length, 'game-over');

  const shareContent = `Codly - Crack the code! 🔑 ${iconsShare}`;
  const url = "https://carack-the-code.vercel.app";

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${shareContent} ${url}`);
    setIsCopied(true);
  };

  return (
    <>
    <S.Solution>{solution}</S.Solution>
    <S.Container>
      <S.Paragraph>
      {isCopied ? (
        'Link copied, now it`s just paste in your social network.'
      ) : (
        <>
          Share your socre, just
          <S.ShareLink onClick={handleCopyText} isCopied={isCopied}>
            copy the link
          </S.ShareLink>
          .
        </>
      )}
      </S.Paragraph>
    </S.Container>
    </>
  );
};

export default Share;