import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <Image
            width={475}
            height={475}
            alt='Imagem Hero'                    
            src="/images/logo.svg"
        />
      </LogoImg>
      <LogoText>Greenland</LogoText>
    </LogoWrapper>
  );
}
