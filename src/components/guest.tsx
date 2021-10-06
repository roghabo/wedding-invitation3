import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, SubmitHandler } from "react-hook-form";
import arrow from "../images/ic_r_b_3x.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../fbase";

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

interface IAttendForm {
  name: string;
  relation: string;
  count: number;
}

interface ICommentForm {
  name: string;
  relation: string;
  message: string;
}

export const Guest = () => {
  const [moneyModalIsOpen, setMoneyModalIsOpen] = useState(false);
  const [commentModalIsOpen, setCommentModalIsOpen] = useState(false);
  const [attendModalIsOpen, setAttendModalIsOpen] = useState(false);

  const { register: attendRegister, handleSubmit: attendHandleSubmit } =
    useForm<IAttendForm>();

  const { register: commentRegister, handleSubmit: commentHandleSubmit } =
    useForm<ICommentForm>();

  const getFormatDate = () => {
    const today = new Date();
    var year: any = today.getFullYear();
    year = (year + "").slice(2);
    let month: any = 1 + today.getMonth();
    month = month >= 10 ? month : "0" + month;
    var day: any = today.getDate();
    day = day >= 10 ? day : "0" + day;
    return year + "." + month + "." + day;
  };

  const handleAttendFormSubmit: SubmitHandler<IAttendForm> = async ({
    name,
    relation,
    count,
  }) => {
    try {
      const docRef = await addDoc(collection(db, "attend"), {
        name,
        relation,
        count,
      });
      console.log("Document written with ID: ", docRef.id);
      closeAttendModal();
      alert("전송되었습니다.");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCommentFormSubmit: SubmitHandler<ICommentForm> = async ({
    name,
    relation,
    message,
  }) => {
    try {
      const createdAt = getFormatDate();
      const docRef = await addDoc(collection(db, "message"), {
        name,
        relation,
        message,
        createdAt,
      });
      console.log("Document written with ID: ", docRef.id);
      closeCommentModal();
      alert("방명록이 작성되었습니다.");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
          <form
            className="guest__modal__form"
            onSubmit={commentHandleSubmit(handleCommentFormSubmit)}
          >
            <div className="guest__modal__contents__title black">
              <span>
                이름 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              {...commentRegister("name")}
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
            <div className="guest__modal__form__genders">
              <div className="guest__modal__form__genders__gender">
                <input
                  {...commentRegister("relation")}
                  type="radio"
                  id="gender_male"
                  name="relation"
                  value="신랑 측"
                  required
                />
                <label htmlFor="gender_male">신랑 측</label>
              </div>
              <div className="guest__modal__form__genders__gender">
                <input
                  {...commentRegister("relation")}
                  type="radio"
                  id="gender_female"
                  name="relation"
                  value="신부 측"
                  required
                />
                <label htmlFor="gender_female">신부 측</label>
              </div>
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
              {...commentRegister("message")}
            />
            <button className="guest__modal__submit" type="submit">
              <span>전송</span>
            </button>
          </form>
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
            결혼식에 참석하실 경우 아래 내용을 작성해주세요.
          </div>
          <form
            className="guest__modal__form"
            onSubmit={attendHandleSubmit(handleAttendFormSubmit)}
          >
            <div className="guest__modal__contents__title black">
              <span>
                참석자 성함 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              {...attendRegister("name")}
              className="guest__modal__form__input"
              type="text"
              placeholder="이름을 작성해주세요."
              required
              name="name"
            />
            <div className="guest__modal__contents__title black">
              <span>
                관계 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <div className="guest__modal__form__genders">
              <div className="guest__modal__form__genders__gender">
                <input
                  {...attendRegister("relation")}
                  type="radio"
                  id="gender_male"
                  name="relation"
                  value="신랑 측"
                  required
                />
                <label htmlFor="gender_male">신랑 측</label>
              </div>
              <div className="guest__modal__form__genders__gender">
                <input
                  {...attendRegister("relation")}
                  type="radio"
                  id="gender_female"
                  name="relation"
                  value="신부 측"
                  required
                />
                <label htmlFor="gender_female">신부 측</label>
              </div>
            </div>
            <div className="guest__modal__contents__title black">
              <span>
                총 인원 <span style={{ color: "#EEAA25" }}>*</span>
              </span>
            </div>
            <input
              {...attendRegister("count", { pattern: /^[0-9]+$/i })}
              className="guest__modal__form__input mb-0"
              type="text"
              placeholder="본인을 포함한 총 인원 수를 작성해주세요."
              required
              name="count"
            />
            <button className="guest__modal__submit" type="submit">
              <span>전송</span>
            </button>
          </form>
        </Modal>
      </div>
    </section>
  );
};
