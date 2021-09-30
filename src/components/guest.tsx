import React from "react";
import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import arrow from "../images/ic_r_b_3x.png";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    zIndex: 100,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "32px 24px",
    border: "none",
    borderRadius: "none",
  },
};

export const Guest = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const copyAccount = () => {
    alert("계좌번호가 복사되었습니다.");
  };
  return (
    <section className="guest">
      <div className="guest__title">
        <p>Guest book</p>
      </div>
      <div className="guest__text">
        <p>저희를 향한 축하의 마음을 전해주세요.</p>
      </div>
      <div className="guest__box">
        <p>축하 메시지 남기기</p>
        <img src={arrow} alt="" />
      </div>
      <div className="guest__box" onClick={openModal}>
        <p>축의금 보내기</p>
        <img src={arrow} alt="" />
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="guest__modal__title">Gift</div>
          <div className="guest__modal__coment">
            보내주시는 축의금 감사한 마음으로 받겠습니다. <br />
            계좌번호를 클릭하시면 복사됩니다.
          </div>
          <div className="guest__modal__contents">
            <div className="guest__modal__contents__title">
              <span>신랑측 계좌번호</span>
            </div>
            <div className="guest__modal__contents__text">
              <CopyToClipboard
                onCopy={copyAccount}
                text={"200123-45-678900 정영석"}
              >
                <span>국민 200123-45-678900 정영석</span>
              </CopyToClipboard>
            </div>
          </div>
          <div className="guest__modal__contents">
            <div className="guest__modal__contents__title">
              <span>신부측 계좌번호</span>
            </div>
            <div className="guest__modal__contents__text">
              <CopyToClipboard
                onCopy={copyAccount}
                text={"200123-45-678900 최수지"}
              >
                <span>국민 200123-45-678900 최수지</span>
              </CopyToClipboard>
            </div>
          </div>
          <div className="guest__modal__button" onClick={closeModal}>
            <span>확인</span>
          </div>
        </Modal>
      </div>
    </section>
  );
};
