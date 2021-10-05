import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TextareaAutosize from "react-textarea-autosize";
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
    width: "80%",
    maxWidth: "340px",
  },
};

export const Guest = () => {
  const [moneyModalIsOpen, setMoneyModalIsOpen] = useState(false);
  const [commentModalIsOpen, setCommentModalIsOpen] = useState(false);
  const [attendModalIsOpen, setAttendModalIsOpen] = useState(false);

  function openMoneyModal() {
    setMoneyModalIsOpen(true);
  }

  function afterOpenMoneyModal() {}

  function closeMoneyModal() {
    setMoneyModalIsOpen(false);
  }

  function openCommentModal() {
    setCommentModalIsOpen(true);
  }

  function afterOpenCommentModal() {}

  function closeCommentModal() {
    setCommentModalIsOpen(false);
  }

  function openAttendModal() {
    setAttendModalIsOpen(true);
  }

  function afterOpenAttendModal() {}

  function closeAttendModal() {
    setAttendModalIsOpen(false);
  }

  const copyAccount = () => {
    alert("계좌번호가 복사되었습니다.");
  };
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <section className="guest">
      <div className="guest__title">
        <p>Guest book</p>
      </div>
      <div className="guest__text">
        <p>저희를 향한 축하의 마음을 전해주세요.</p>
      </div>
      <div className="guest__box" onClick={openAttendModal}>
        <p>결혼식 참석 명단 작성</p>
        <img src={arrow} alt="" />
      </div>

      <div className="guest__box" onClick={openCommentModal}>
        <p>축하 메시지 남기기</p>
        <img src={arrow} alt="" />
      </div>
      <div className="guest__box" onClick={openMoneyModal}>
        <p>축의금 보내기</p>
        <img src={arrow} alt="" />
      </div>
      <div>
        <Modal
          isOpen={moneyModalIsOpen}
          onAfterOpen={afterOpenMoneyModal}
          onRequestClose={closeMoneyModal}
          style={customStyles}
          contentLabel="Money Modal"
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
          <div className="guest__modal__button" onClick={closeMoneyModal}>
            <span>확인</span>
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={commentModalIsOpen}
          onAfterOpen={afterOpenCommentModal}
          onRequestClose={closeCommentModal}
          style={customStyles}
          contentLabel="Comment Modal"
        >
          <div className="guest__modal__title">Message</div>
          <div className="guest__modal__coment">
            저의 부부에게만 보여지는 메세지입니다.
          </div>
          <form className="guest__modal__form">
            <div className="guest__modal__contents__title black">
              <span>
                이름 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              className="guest__modal__form__input"
              type="text"
              placeholder="이름을 작성해주세요."
              required
            />
            <div className="guest__modal__contents__title black">
              <span>
                관계 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <div className="guest__modal__contents__title black">
              <span>
                축하 메시지 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <TextareaAutosize
              maxRows={3}
              className="guest__modal__form__textarea"
              placeholder="내용을 작성해주세요."
            />
          </form>
          <div className="guest__modal__submit" onClick={closeCommentModal}>
            <span>전송</span>
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={attendModalIsOpen}
          onAfterOpen={afterOpenAttendModal}
          onRequestClose={closeAttendModal}
          style={customStyles}
          contentLabel="Attend Modal"
        >
          <div className="guest__modal__title">Attend</div>
          <div className="guest__modal__coment">
            결혼식에 참여하실 경우 아래 내용을 작성해주세요.
          </div>
          <form className="guest__modal__form">
            <div className="guest__modal__contents__title black">
              <span>
                참석자 성함 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              className="guest__modal__form__input"
              type="text"
              placeholder="이름을 작성해주세요."
              required
            />
            <div className="guest__modal__contents__title black">
              <span>
                관계 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <div className="guest__modal__contents__title black">
              <span>
                총 인원 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              className="guest__modal__form__input"
              type="text"
              placeholder="본인을 포함한 총 인원 수를 작성해주세요."
              required
            />
          </form>
          <div className="guest__modal__submit" onClick={closeAttendModal}>
            <span>전송</span>
          </div>
        </Modal>
      </div>
    </section>
  );
};
