import { Button, Timeline } from "antd";
import { useState } from "react";

import "../Projects.css";

const TimeLines = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            color: "#52c41a",
            children: (
              <>
                <div className="order-main">
                  <p>$2,400 - Redesign store</p>
                  <span>09 JUN 7:20 PM</span>
                </div>
              </>
            ),
          },
          {
            color: "#52c41a",
            children: (
              <>
                <div className="order-main">
                  <p>New order #3654323</p>
                  <span>08 JUN 12:20 PM</span>
                </div>
              </>
            ),
          },
          {
            children: (
              <>
                <div className="order-main">
                  <p>Company server payments</p>
                  <span>04 JUN 3:10 PM</span>
                </div>
              </>
            ),
          },
          {
            children: (
              <>
                <div className="order-main">
                  <p>New card added for order #4826321</p>
                  <span>02 JUN 2:45 PM</span>
                </div>
              </>
            ),
          },
          {
            children: (
              <>
                <div className="order-main">
                  <p>Unlock folders for development</p>
                  <span>18 MAY 1:30 PM</span>
                </div>
              </>
            ),
          },
          {
            color: "#52c41a",
            children: (
              <>
                <div className="order-main">
                  <p>New order #3654323</p>
                  <span>08 JUN 12:20 PM</span>
                </div>
              </>
            ),
          },

          {
            color: "gray",
            children: (
              <>
                <div className="order-main">
                  <p>New order #46282344</p>
                  <span>14 MAY 3:30 PM</span>
                </div>
              </>
            ),
          },
        ]}
      />
      <Button
        type="primary"
        style={{
          marginTop: 30,
          width: "100%",
          fontWeight: 600,
          height: "34px",
          fontSize: "12px",
        }}
        onClick={handleClick}
      >
        REVERSE
      </Button>
    </>
  );
};
export default TimeLines;
