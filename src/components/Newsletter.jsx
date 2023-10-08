import React from "react";

const Newsletter = () => {
  return (
    <div className="news-letter">
      <div className="news">
        <img src="footer.png" alt="" />
        <div className="news-right">
          <h1>Join Our Newsletter</h1>
          <div className="news-email">
            <input type="email" placeholder="For latest updates enter email" />
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
