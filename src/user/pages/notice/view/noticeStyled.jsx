import noticeBackground from '../../../../common/img/noticeBackground.jpg'
import styled from "styled-components";

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-image: url(${noticeBackground});
  background-size: cover;
  background-position: center;

  h2 {
    font-family: Bruno Ace SC;
    color: var(--tertiary500);
  }
`;