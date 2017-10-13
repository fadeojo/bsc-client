/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';
// import messages from './messages';
import './HomePage.scss';
import creditCard from './iphoneCreditCard.svg';

// eslint-disable-next-line
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-component">
        <div
          style={{
            background:
              '-webkit-radial-gradient(0% 90%, #00bab0 0%, #115c82 93%)',
          }}
        >
          <div
            style={{
              height: 100,
              display: 'flex',
              alignItems: 'flex-end',
              paddingLeft: 65,
              color: 'white',
            }}
          >
            LYSILOFT
          </div>
          <Row>
            <Col
              span={16}
              style={{
                color: 'white',
                fontSize: 75,
                fontFamily: 'helvetica',
                paddingLeft: 60,
              }}
            >
              <div style={{ width: '90%' }}>
                Introducing the new way to engage with members of your Church!
              </div>
            </Col>
            <Col span={8}>
              <Row style={{ display: 'flex' }}>
                <img src={creditCard} alt="" />
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Row
            style={{
              margin: '50px 0',
              fontFamily: 'helvetica',
              color: '#002452',
            }}
          >
            <Col span={12} style={{ padding: '0 50px' }}>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
              >
                Why Nethan
              </div>
              <div
                style={{
                  fontSize: 15,
                }}
              >
                <p
                  style={{
                    margin: '25px 0',
                  }}
                >
                  Every year, churches in the world process a lot of cash
                  donations or offerings. As the world has evolved to the
                  strength of technology, the traditional way of giving is now
                  inconvenient and many churches have not fully adjusted to the
                  lifestyle of the average church member.
                </p>
                <p
                  style={{
                    margin: '25px 0',
                  }}
                >
                  Research shows that today, 70% of the population of North
                  America use smart phones for daily interaction - from
                  communication to digital payments. Our goal at Nethan is to
                  leverage that behaviour for the good of the church.
                </p>
                <p
                  style={{
                    margin: '25px 0',
                  }}
                >
                  Nethan is a service that creates websites and mobile
                  applications for churches or ministries to improve
                  communication with members and increase the potential for
                  financial contributions or payments.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}
                >
                  Payment
                </div>
                <div
                  style={{
                    margin: '25px 0',
                  }}
                >
                  <ul
                    style={{
                      listStyle: 'disc',
                      fontSize: 15,
                    }}
                  >
                    <li>
                      Way less hours spent counting money and performing data
                      entry.
                    </li>
                    <li>
                      Ability to receive donations if church member is away.
                    </li>
                    <li>
                      Automatic tax refund slips to church members. Lower risk
                      of money being stolen.
                    </li>
                    <li>
                      Analytics to better understand giving trends at your
                      church.
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}
                >
                  Communication
                </div>
                <div
                  style={{
                    margin: '25px 0',
                  }}
                >
                  <ul
                    style={{
                      listStyle: 'disc',
                      fontSize: 15,
                    }}
                  >
                    <li>
                      Send push notifications to church members regarding
                      events, sermons or new campaigns at any time to improve
                      engagement.
                    </li>
                    <li>Events & Calendar</li>
                  </ul>
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}
                >
                  Media
                </div>
                <div
                  style={{
                    margin: '25px 0',
                  }}
                >
                  <ul
                    style={{
                      listStyle: 'disc',
                      fontSize: 15,
                    }}
                  >
                    <li>Live Streaming</li>
                    <li>Audio & Video Sermons/Messages</li>
                    <li>News Letters</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div
          style={{
            background:
              '-webkit-radial-gradient(0% 90%, #00bab0 0%, #115c82 93%)',
          }}
        >
          <Row
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '50px 50px',
              color: 'white',
            }}
          >
            <Col
              span={14}
              style={{
                fontSize: 24,
              }}
            >
              <div
                style={{
                  padding: '15px 0',
                }}
              >
                Is this something your church is interested in?
              </div>
              <div
                style={{
                  padding: '15px 0',
                }}
              >
                Sign up and be the first to know when we launch.
              </div>
            </Col>
            <Col
              span={10}
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  fontSize: 25,
                }}
              >
                Contact us: info@lysilofy.io
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
