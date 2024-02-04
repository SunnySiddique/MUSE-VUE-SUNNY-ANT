import FaceImage7 from "../../../assets/popoverImage/face-2.jpg";
import FaceImage from "../../../assets/popoverImage/face-3.jpg";
import FaceImage4 from "../../../assets/popoverImage/face-4.jpg";
import FaceImage5 from "../../../assets/popoverImage/face-5.jpeg";
import FaceImage6 from "../../../assets/popoverImage/face-6.jpeg";

const ProfileConversation = () => {
  return (
    <>
      <div className="conversation-main">
        <div className="conversation-title">
          <h6>Conversations</h6>
        </div>
        <div className="conversation-sections">
          {/* one */}

          <ConversationCard
            img={FaceImage}
            firstTitle="Sophie B."
            secondTitle="Hi! I need more information…"
            buttonText="REPLY"
          />

          {/* one */}

          {/* two */}

          <ConversationCard
            img={FaceImage4}
            firstTitle="Anne Marie"
            secondTitle="Awesome work, can you…                  "
            buttonText="REPLY"
          />

          {/* two */}

          {/* three */}

          <ConversationCard
            img={FaceImage5}
            firstTitle="Ivan"
            secondTitle="About files I can"
            buttonText="REPLY"
          />

          {/* three */}

          {/* four */}

          <ConversationCard
            img={FaceImage6}
            firstTitle="Peterson"
            secondTitle="Have a greate afternoon"
            buttonText="REPLY"
          />

          {/* four */}

          <ConversationCard
            img={FaceImage7}
            firstTitle="Nick Daniel"
            secondTitle="Hi! I need more information…"
            buttonText="REPLY"
          />
          <ConversationCard
            img={FaceImage5}
            firstTitle="Sunny"
            secondTitle="At presetn, I am learing React"
            buttonText="REPLY"
          />
        </div>
      </div>
    </>
  );
};

function ConversationCard({ img, firstTitle, secondTitle, buttonText }) {
  return (
    <div className="conversation-section">
      <div className="conversation-img">
        <img src={img} alt="" />
        <div className="conversation-content">
          <h4>{firstTitle}</h4>
          <div className="conversation-description">{secondTitle}</div>
        </div>
      </div>
      <div className="conversation-button">
        <button type="button">
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileConversation;
