import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Icon } from 'common/components/Base';
import { NavLink, NavItem, Nav } from 'common/components/Base/Nav';
import { Portlet } from 'common/components/Portlet';
import { Tabs, TabContent, TabPane } from 'common/components/Base/Tab';

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.";

const Base = () => (
  <React.Fragment>
    <Row>
      <Col md="6">
        <Portlet tabbed>
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Portlet Tabs" />
              <Portlet.HeaderTools>
                <Nav tabs lineType="normal" alignRight>
                  <NavItem>
                    <NavLink>
                      {/* <Icon icon="la la-exclamation-triangle" color="danger" /> */}
                      Logs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  {Lorem}
                </TabPane>
                <TabPane tabId={2}>
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={3}>
                  {Lorem}
                  {Lorem}
                </TabPane>
              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>

        <Portlet tabbed>
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Portlet Tabs" subtitle="with metronic icons" />
              <Portlet.HeaderTools>
                <Nav tabs lineType="normal" alignRight tabsColor="brand">
                  <NavItem>
                    <NavLink>
                      <Icon icon="flaticon-share" />
                      Logs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Icon icon="flaticon-placeholder" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  {Lorem}
                </TabPane>
                <TabPane tabId={2}>
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={3}>
                  {Lorem}
                  {Lorem}
                </TabPane>
              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>

        <Portlet tabbed>
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderTools>
                <Nav tabs lineType="bold" tabsColor="brand">
                  <NavItem>
                    <NavLink>
                      <Icon icon="flaticon-share" />
                      Logs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Icon icon="flaticon-placeholder" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  {Lorem}
                </TabPane>
                <TabPane tabId={2}>
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={3}>
                  {Lorem}
                  {Lorem}
                </TabPane>
              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>
      </Col>
      <Col>
        <Portlet tabbed smallHead headerColor="success">
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Portlet Tabs" />
              <Portlet.HeaderTools>
                <Nav tabs lineType="normal" tabsColor="brand" alignRight>
                  <NavItem>
                    <NavLink>
                      Logs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  {Lorem}
                </TabPane>
                <TabPane tabId={2}>
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId={3}>
                  {Lorem}
                  {Lorem}
                </TabPane>
              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>
      </Col>
    </Row>
  </React.Fragment>
);

export default Base;
