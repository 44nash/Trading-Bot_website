import React, { Component } from "react";
import "./Week_1.css";

class Week_1 extends Component {
  render() {
    return (
      <div className="main-area">
        <div className="main-area">
          <h1>Day 1 & 2</h1>
          <p>
            On the 1st and 2nd day of our project day of our project we got
            together and think about what project we wanted learn think about
            what probably wanted to do and the subject came up of doing a trick
            came up of doing a trading bot so that we can actually make our 1st
            time we can actually make our 1st algorithmic trading system and our
            trading bot. Going into this project we knew this would be pretty
            extensive so it was important that we it&#39;s been so so important
            that we tried to keep it as simple as possible and the goal of
            actually doing a trade but also doing it doing a trade but also
            doing it a very simple simplistic way.
          </p>
          <p>
            The place that we decided to start off with is probably the we as a
            group where weakest on was the indicators. We went through a list a
            different trading algorithms and each took a few to digest and
            learn. Then code it some basic data from and api, we chose alpaca
          </p>

          <h1>Day 3 & 4</h1>
          <p>
            Is the 3rd and 4th day we went to try we went to try and talk about
            which technologies which technologies we would be set on using for
            the duration is on using for the duration of the project, comma and
            how complex the project should be should be. As well as implementing
            the machine learning aspect is the machine learning aspect of this
            project
          </p>
          <p>
            We ended up settling on using I&#39;m using alpaca paper to actually
            execute some of my to actually execute some of the trades, is, then
            using a CSV file As our makeshift database database and using
            pipelines and using pipelines so that we could run all the
            indicators together at once.
          </p>

          <p>
            Between these days we also generally caught up on code and matrix is
            generally caught up on code and made sure that we were able to talk
            about our talk about our
          </p>

          <h1>Day 6 & 7</h1>
          <p>
            Here We went into our machinery paths to get started with it. We
            used different books and documentation as well as our class no as
            well as our class notes as way of is 12 showing is showing the steps
            we needed in order to is the steps we needed in order to use this
            process use this process.
          </p>

          <p>
            One of the more confusing parts of this was gettingIs the order and
            have machine learning part played and interact is played and
            interacted with the actual bot sure but once it was created and
            wrong it was created and running.
          </p>

          <p>
            So with our simple case we came up with the ideaThat the bot would
            run the machine learning and the indicator port is learning and the
            indicator portion of the code once A-day at 4:01 once A-day at 4::01
            p.m. signify the Is time that the markets closed.. The bottom of the
            screen is the bottom wood running this at the end of the day and and
            use machine learning to try to predict the next day the next day and
            then based on whatever our indicators gave us our indicators gave us
            back the bot would just trade the bot would just trade using a
            single CSV file Looking for a target price and filling whatever the
            order is in the CSV all day.
          </p>
        </div>
      </div>
    );
  }
}

export default Week_1;
