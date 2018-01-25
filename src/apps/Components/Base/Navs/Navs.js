import React from 'react';
import { Row, Col } from 'reactstrap';
import { Portlet } from 'common/components/Portlet';
import { SectionContent, Demo, Section } from 'common/components/Base/Demo';
import { Badge } from 'common/components/Base';

import { MNav, MNavItem, MNavSection,
  MGridRow, MGridItem, MGridNav, MNavSeparator } from 'common/components/Base/MNav';

const BageNew = (<Badge color="danger" wide rounded>New</Badge>);
const Bage23 = (<Badge color="success" wide>23</Badge>);

const NavsDemo = () => (
  <Row>
    <Col>
      {/* Default Nav */}
      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Default Nav" />
        </Portlet.Header>
        <Portlet.Body>
          <Section>
            <Demo>
              <MNav>
                <MNavItem icon="flaticon-share">
                  Avtivity
                </MNavItem>
                <MNavItem icon="flaticon-chat-1" badge={BageNew}>
                  Messages
                </MNavItem>
                <MNavItem icon="flaticon-info">
                  FAQ
                </MNavItem>
                <MNavItem icon="flaticon-cogwheel-2">
                  Settings
                </MNavItem>
                <MNavItem icon="flaticon-lifebuoy" badge={Bage23}>
                  Support
                </MNavItem>
              </MNav>
            </Demo>
          </Section>
        </Portlet.Body>
      </Portlet>
      {/* Section and Separator */}
      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Section and Separator" />
        </Portlet.Header>
        <Portlet.Body>
          <Demo>
            <MNav>
              <MNavSection first>Section 1</MNavSection>
              <MNavItem icon="flaticon-share">
                Avtivity
              </MNavItem>
              <MNavItem icon="flaticon-chat-1">
                Messages
              </MNavItem>
              <MNavItem icon="flaticon-info">
                FAQ
              </MNavItem>
              <MNavSection>Section 2</MNavSection>
              <MNavItem icon="flaticon-cogwheel-2">
                Support
              </MNavItem>
              <MNavItem icon="flaticon-lifebuoy">
                Settings
              </MNavItem>
              <MNavItem icon="flaticon-interface-1">
                Logs
              </MNavItem>
              <MNavSeparator />
            </MNav>
          </Demo>
        </Portlet.Body>
      </Portlet>

      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Section and Separator" />
        </Portlet.Header>
        <Portlet.Body>
          <Demo>
            <MNav >
              <MNavItem active icon="flaticon-share">
                Avtive
              </MNavItem>
              <MNavItem icon="flaticon-chat-1">
                Link
              </MNavItem>
              <MNavItem disabled icon="flaticon-info">
                Disabled
              </MNavItem>
              <MNavItem icon="flaticon-lifebuoy">
                Link
              </MNavItem>
            </MNav>
          </Demo>
        </Portlet.Body>
      </Portlet>

      {/* GridNav */}
    </Col>
    {/* Second column */}
    <Col>
      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Default Nav" />
        </Portlet.Header>
        <Portlet.Body>
          <Section>
            <SectionContent subTitle="Nav items can have dot and line style bullets:">
              <Demo>
                <MNav>
                  <MNavItem bullet="line">
                    Avtivity
                  </MNavItem>
                  <MNavItem bullet="line">
                    Messages
                  </MNavItem>
                  <MNavItem bullet="dot">
                    FAQ
                  </MNavItem>
                  <MNavItem bullet="dot">
                    Settings
                  </MNavItem>
                </MNav>
              </Demo>
            </SectionContent>
          </Section>
        </Portlet.Body>
      </Portlet>
      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Inline Nav" />
        </Portlet.Header>
        <Portlet.Body>
          <Section>
            <SectionContent>
              <Demo>
                <MNav inline>
                  <MNavItem icon="flaticon-share">
                    Avtivity
                  </MNavItem>
                  <MNavItem icon="flaticon-chat-1" badge={BageNew}>
                    Messages
                  </MNavItem>
                  <MNavItem icon="flaticon-info">
                    FAQ
                  </MNavItem>
                  <MNavItem icon="flaticon-lifebuoy" badge={Bage23}>
                    Support
                  </MNavItem>
                </MNav>
              </Demo>
            </SectionContent>
            <SectionContent>
              <Demo>
                <MNav inline>
                  <MNavItem bullet="line">
                    Avtivity
                  </MNavItem>
                  <MNavItem bullet="line" badge={BageNew}>
                    Messages
                  </MNavItem>
                  <MNavItem bullet="dot">
                    FAQ
                  </MNavItem>
                  <MNavItem bullet="dot" badge={Bage23}>
                    Support
                  </MNavItem>
                </MNav>
              </Demo>
            </SectionContent>
          </Section>
        </Portlet.Body>
      </Portlet>
      <Portlet>
        <Portlet.Header>
          <Portlet.HeaderCaption title="Default nav" />
        </Portlet.Header>
        <Portlet.Body>
          <Demo>
            <MGridNav>
              <MGridRow>
                <MGridItem icon="flaticon-file" className="test-class">
                  Generate Report
                </MGridItem>
                <MGridItem icon="flaticon-time">
                  New Event
                </MGridItem>
                <MGridItem icon="flaticon-user">
                  Add Member
                </MGridItem>
              </MGridRow>
              <MGridRow>
                <MGridItem icon="flaticon-folder">
                  Create New Task
                </MGridItem>
                <MGridItem icon="flaticon-clipboard">
                  Completed Tasks
                </MGridItem>
                <MGridItem icon="flaticon-interface-3">
                  Check Logs
                </MGridItem>
              </MGridRow>
            </MGridNav>
          </Demo>
        </Portlet.Body>
      </Portlet>
    </Col>
  </Row>
);

export default NavsDemo;
