import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Icon } from 'common/components/Base';
import { NavLink, NavItem, Nav } from 'common/components/Base/Nav';
import { Portlet } from 'common/components/Portlet';
import { Tabs, TabContent, TabPane } from 'common/components/Base/Tab';

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

const TabsDemo = () => (
  <Row>
    <Col xs="12">
      <div className="row">
        <div className="col-lg-6">
          {/*  */}
          <Portlet>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Basic tabs" />
            </Portlet.Header>
            <Portlet.Body>
              <Tabs>
                <Nav tabs>
                  <NavItem>
                    <NavLink>
                      <Icon icon="la la-exclamation-triangle" color="danger" />
                      Tab1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Moar Tabs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Disabled
                    </NavLink>
                  </NavItem>
                </Nav>
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
              </Tabs>
            </Portlet.Body>
          </Portlet>
        </div>
      </div>
    </Col>
  </Row>
);

export default TabsDemo;
