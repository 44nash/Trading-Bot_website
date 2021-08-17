import logo from "../../logo.svg";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Row, Col, Card, CardGroup, ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div className="main-area">
      <div className="cards-area main-area">
        <h1> Project 2: Algorithmic Trading Bot </h1>
        <h2 style={{ paddingTop: "15px" }}>Team Members</h2>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/43914274?v=4"
            />
            <Card.Body>
              <Card.Title>Marcus</Card.Title>
              <Card.Text>
                Used Polygon.io to stream live data form the bot, used basic
                Linear-Regression, Machine Learning and Deep Learning algorithms
                to predict price and as well as worked on a few indicators.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/9807654?v=4"
            />
            <Card.Body>
              <Card.Title>Nathan</Card.Title>
              <Card.Text>What did you do work on short sentence</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/77021656?v=4"
            />
            <Card.Body>
              <Card.Title>Benny</Card.Title>
              <Card.Text>What did you do work on short sentence</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/43149015?v=4"
            />
            <Card.Body>
              <Card.Title>Emmanuel</Card.Title>
              <Card.Text>What did you do work on short sentence</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div className="main-area">
        <h2> Introduction</h2>

        <p>
          {" "}
          Over this <strong>two week</strong> main purpose was to set up a
          Trading Bot that could excute trades dayly. The trades came from a
          combinatin of Linear-Regression, Machine Learning and Deep Learning,
          and then where put through an indicators test to such as stochastic
          oscillator, fibonacci retracement, and bollinger bands to see the
          overall trends and what the predicted price means.
        </p>

        <p>
          EX: For stochastic oscillator is the price predicted tomorrow is
          lower, and hits the lower band of the graph it could mean a sign of
          strong reversal and we would want to buy.
        </p>
        <p>
          In this project, we will create an algorithmic-trading system by
          combining technical analysis of timeseries, machine-learning
          algorithms, and application programming interfaces (APIs) for trading
          stocks, bonds, and cryptocurrency. The input data will consist of
          (Open, High, Low, Close, Volume) (OHLCV) data freely available from
          <a href="https://alpaca.markets/docs/api-documentation/how-to/market-data/">
            Alpaca
          </a>
          and
          <a href="https://docs.kraken.com/rest/#operation/getOHLCData">
            Kraken APIs
          </a>
          .
          <a href="https://www.ig.com/us/trading-strategies/10-trading-indicators-every-trader-should-know-190604">
            Technical indicators
          </a>{" "}
          will be constructed from the input OHLCV data and transformed into
          machine-learning features using a
          <a href="https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html">
            sklearn.pipeline.Pipeline
          </a>
          . Output/Target variables for the machine-learning algorithms will
          consist of 1-day, 5-day, and 10-day returns, for example.
          <a href="https://scikit-learn.org/stable/modules/ensemble.html">
            Ensemble methods
          </a>
          will be used to combine the predictions of several machine-learning
          algorithms (e.g. random forest, recurrent neural networks, etc.) into
          a single predictor in order to improve generalizability and robustness
          over using a single algorithm. Backtesting on historical data will
          allow for key performance parameters such as profit & loss, length of
          time positions are held, maximum drawdown, etc., to be assessed. If
          time permits, we will also attempt to incorporate alternative data
          such as
          <a className="" href="https://finnhub.io/docs/api/news-sentiment">
            sentiment analysis from FinnHub
          </a>
          into the algorithmic-trading system.
        </p>
      </div>

      <div className="main-area">
        <h2>Technical Indicators</h2>
        <ListGroup>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/s/sma.asp"
          >
            Simple Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/e/ema.asp"
          >
            Exponential Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/d/double-exponential-moving-average.asp"
          >
            Double Exponential Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/t/triple-exponential-moving-average.asp"
          >
            Triple Exponential Moving Average
          </ListGroup.Item>
        </ListGroup>
        <h2 style={{ paddingTop: "25px" }}>References</h2>
        <ListGroup>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.ig.com/us/trading-strategies/10-trading-indicators-every-trader-should-know-190604"
          >
            10 Trading Indicators Every Trader Should Know
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default Home;
