import React from 'react';
import { Row, Col } from 'reactstrap';
import { NavLink, NavItem, Nav } from 'common/components/Base/Nav';
import { Tabs, TabContent, TabPane } from 'common/components/Base/Tab';
import { Button } from 'common/components/Button/Default';
import { SquareButton } from 'common/components/Button/Square';
import { Portlet } from 'common/components/Portlet';
import { PillButtonGroup } from 'common/components/Button/PillGroup';
import { AirButtonGroup } from 'common/components/Button/AirGroup';
import { ButtonGroup } from 'common/components/Button/Group';
import { Dropdown } from 'common/components/Button/Dropdown';
import { DropdownToggle } from 'common/components/Button/DropdownToggle';
import { DropdownMenu } from 'common/components/Button/DropdownMenu';
import { DropdownItem } from 'common/components/Button/DropdownItem';
import { Input } from 'common/components/Button/Input';
import { InputGroupAddon } from 'common/components/Button/InputGroupAddon';
import { InputGroup } from 'common/components/Button/InputGroup';
import { ButtonToolbar } from 'common/components/Button/Toolbar';
import { Section, SectionContent, Demo } from './DefaultStyle';

const toolbarTitle = (
  <React.Fragment>
    Combine sets of <code> btn-group </code> into a <code>btn-toolbar</code>
    for more complex components.
  </React.Fragment>);

const PillToolbarTitle = (
  <React.Fragment>
    Combine sets of <code>m-btn-group m-btn-group--pill btn-group </code> into a
    <code>btn-toolbar</code>
    for more complex components.
  </React.Fragment>);

const AirToolbarTitle = (
  <React.Fragment>
    Combine sets of <code>m-btn-group m-btn-group--air btn-group </code> into a
    <code>btn-toolbar</code>
    for more complex components.
  </React.Fragment>);

const PillSizingSubtitle = (
  <React.Fragment>
    Instead of applying button sizing classes to every button in a group, just add
    <code>.m-btn-group m-btn-group--pill.btn-group-*</code> to each
    <code>.m-btn-group m-btn-group--pill.btn-group</code>,including
    each one when nesting multiple groups.
  </React.Fragment>
);

const AirSizingSubtitle = (
  <React.Fragment>
    Instead of applying button sizing classes to every button in a group, just add
    <code>.m-btn-group m-btn-group--air.btn-group-*</code> to each
    <code>.m-btn-group m-btn-group--air.btn-group</code>,including
    each one when nesting multiple groups.
  </React.Fragment>
);

const sizingSubtitle = (
  <React.Fragment>
    Instead of applying button sizing classes to every button in a group, just add
    <code>.btn-group-*</code> to each <code>.btn-group</code> , including
    each one when nesting multiple groups.
  </React.Fragment>
);

const verticalSubtitle = (
  <React.Fragment>
    Make a set of buttons appear vertically stacked rather than horizontally
  </React.Fragment>
);

const nestingSubtitle = (
  <React.Fragment>
    Place a .btn-group within another <code>.btn-group</code> when you want dropdown
    menus mixed with a series of buttons.
  </React.Fragment>
);

const PillNestingSubtitle = (
  <React.Fragment>
    Place a .m-btn-group m-btn-group--pill .btn-group within another
    <code>.m-btn-group m-btn-group--pill.btn-group</code>when you want dropdown
    menus mixed with a series of buttons.
  </React.Fragment>
);

const AirNestingSubtitle = (
  <React.Fragment>
    Place a .m-btn-group m-btn-group--air .btn-group within another
    <code>.m-btn-group m-btn-group--air.btn-group</code>when you want dropdown
    menus mixed with a series of buttons.
  </React.Fragment>
);

const BtnGroup = () => (
  <React.Fragment>
    <Row>
      <Col md="6">
        <Portlet tabbed>
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Base Buttons" />
              <Portlet.HeaderTools>
                <Nav tabsColor="brand" tabs lineType="normal" alignRight>
                  <NavItem>
                    <NavLink>
                      Default style
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Square style
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  <Section>
                    <SectionContent heading="Basic example" subTitle="Basic button group examples">
                      <Demo>
                        <Row>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <Button color="secondary">Left</Button>
                              <Button color="secondary">Middle</Button>
                              <Button color="secondary">Right</Button>
                            </ButtonGroup>
                          </Col>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                      <Demo>
                        <Row>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </ButtonGroup>
                          </Col>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <Button color="success">Left</Button>
                              <Button color="success">Middle</Button>
                              <Button color="success">Right</Button>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Buttons toolbar" subTitle={toolbarTitle}>
                      <Demo>
                        <ButtonToolbar>
                          <ButtonGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-bold">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-paperclip">{null}</i></Button>
                          </ButtonGroup>
                          <ButtonGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          </ButtonGroup>
                          <ButtonGroup>
                            <Button color="secondary" mBtn><i className="la la-scissors">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-unlink">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Demo>
                      <Demo>
                        <ButtonToolbar mb3>
                          <ButtonGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </ButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                        <ButtonToolbar justify>
                          <ButtonGroup>
                            <Button color="primary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="success" mBtn><i className="la la-paperclip">{null}</i></Button>
                            <Button color="warning" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="info" mBtn><i className="la la-scissors">{null}</i></Button>
                          </ButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Sizing" subTitle={sizingSubtitle}>
                      <Demo>
                        <ButtonGroup size="lg">
                          <Button outline color="success">Left</Button>
                          <Button outline color="success">Middle</Button>
                          <Button outline color="success">Right</Button>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup>
                          <Button outline color="warning">Left</Button>
                          <Button outline color="warning">Middle</Button>
                          <Button outline color="warning">Right</Button>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup size="sm">
                          <Button outline color="info">Left</Button>
                          <Button outline color="info">Middle</Button>
                          <Button outline color="info">Right</Button>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Nesting" subTitle={nestingSubtitle}>
                      <Demo>
                        <ButtonGroup>
                          <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          <Dropdown group>
                            <DropdownToggle caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Vertical" subTitle={verticalSubtitle}>
                      <Demo>
                        <ButtonGroup vertical>
                          <Button color="secondary">Button</Button>
                          <Dropdown group>
                            <DropdownToggle caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown >
                          <Button color="secondary">Button</Button>
                          <Dropdown group>
                            <DropdownToggle caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>
                </TabPane>

                <TabPane tabId={2}>
                  <Section>
                    <SectionContent heading="Basic example" subTitle="Basic button group examples">
                      <Demo>
                        <Row>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <SquareButton color="secondary">Left</SquareButton>
                              <SquareButton color="secondary">Middle</SquareButton>
                              <SquareButton color="secondary">Right</SquareButton>
                            </ButtonGroup>
                          </Col>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <SquareButton color="brand">Left</SquareButton>
                              <SquareButton color="brand">Middle</SquareButton>
                              <SquareButton color="brand">Right</SquareButton>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                      <Demo>
                        <Row>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <SquareButton color="brand">Left</SquareButton>
                              <SquareButton color="brand">Middle</SquareButton>
                              <SquareButton color="brand">Right</SquareButton>
                            </ButtonGroup>
                          </Col>
                          <Col md="6">
                            <ButtonGroup mGroup>
                              <SquareButton color="success">Left</SquareButton>
                              <SquareButton color="success">Middle</SquareButton>
                              <SquareButton color="success">Right</SquareButton>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Buttons toolbar" subTitle={toolbarTitle}>
                      <Demo>
                        <ButtonToolbar>
                          <ButtonGroup mr2>
                            <SquareButton color="secondary" mBtn><i className="la la-file-text-o">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-bold">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-paperclip">{null}</i></SquareButton>
                          </ButtonGroup>
                          <ButtonGroup mr2>
                            <SquareButton color="secondary" mBtn><i className="la la-floppy-o">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-files-o">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-header">{null}</i></SquareButton>
                          </ButtonGroup>
                          <ButtonGroup>
                            <SquareButton color="secondary" mBtn><i className="la la-scissors">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-unlink">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-italic">{null}</i></SquareButton>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Demo>
                      <Demo>
                        <ButtonToolbar mb3>
                          <ButtonGroup mr2>
                            <SquareButton color="secondary" mBtn><i className="la la-file-text-o">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-floppy-o">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-header">{null}</i></SquareButton>
                            <SquareButton color="secondary" mBtn><i className="la la-italic">{null}</i></SquareButton>
                          </ButtonGroup>
                          <InputGroup square>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                        <ButtonToolbar justify>
                          <ButtonGroup>
                            <SquareButton color="primary" mBtn><i className="la la-file-text-o">{null}</i></SquareButton>
                            <SquareButton color="success" mBtn><i className="la la-paperclip">{null}</i></SquareButton>
                            <SquareButton color="warning" mBtn><i className="la la-files-o">{null}</i></SquareButton>
                            <SquareButton color="info" mBtn><i className="la la-scissors">{null}</i></SquareButton>
                          </ButtonGroup>
                          <InputGroup square>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Sizing" subTitle={sizingSubtitle}>
                      <Demo>
                        <ButtonGroup size="lg">
                          <SquareButton outline color="success">Left</SquareButton>
                          <SquareButton outline color="success">Middle</SquareButton>
                          <SquareButton outline color="success">Right</SquareButton>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup>
                          <SquareButton outline color="warning">Left</SquareButton>
                          <SquareButton outline color="warning">Middle</SquareButton>
                          <SquareButton outline color="warning">Right</SquareButton>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup size="sm">
                          <SquareButton outline color="info">Left</SquareButton>
                          <SquareButton outline color="info">Middle</SquareButton>
                          <SquareButton outline color="info">Right</SquareButton>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Nesting" subTitle={nestingSubtitle}>
                      <Demo>
                        <ButtonGroup>
                          <SquareButton color="secondary" mBtn><i className="la la-file-text-o">{null}</i></SquareButton>
                          <SquareButton color="secondary" mBtn><i className="la la-floppy-o">{null}</i></SquareButton>
                          <SquareButton color="secondary" mBtn><i className="la la-header">{null}</i></SquareButton>
                          <SquareButton color="secondary" mBtn><i className="la la-italic">{null}</i></SquareButton>
                          <Dropdown group>
                            <DropdownToggle square mBtn caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Vertical" subTitle={verticalSubtitle}>
                      <Demo>
                        <ButtonGroup vertical>
                          <SquareButton color="secondary">Button</SquareButton>
                          <Dropdown group>
                            <DropdownToggle square caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown >
                          <SquareButton color="secondary">Button</SquareButton>
                          <Dropdown group>
                            <DropdownToggle square caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                </TabPane>

              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>
      </Col>
      <Col md="6">

        <Portlet tabbed>
          <Tabs>
            <Portlet.Header>
              <Portlet.HeaderCaption title="Custom Buttons" />
              <Portlet.HeaderTools>
                <Nav tabsColor="brand" tabs lineType="normal" alignRight>
                  <NavItem>
                    <NavLink>
                      Pill style
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      Air style
                    </NavLink>
                  </NavItem>
                </Nav>
              </Portlet.HeaderTools>
            </Portlet.Header>
            <Portlet.Body>
              <TabContent>
                <TabPane tabId={1}>
                  <Section>
                    <SectionContent heading="Basic example" subTitle="Basic button group examples">
                      <Demo>
                        <Row>
                          <Col md="6">
                            <PillButtonGroup mGroup>
                              <Button color="secondary">Left</Button>
                              <Button color="secondary">Middle</Button>
                              <Button color="secondary">Right</Button>
                            </PillButtonGroup>
                          </Col>
                          <Col md="6">
                            <PillButtonGroup mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </PillButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                      <Demo>
                        <Row>
                          <Col md="6">
                            <PillButtonGroup mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </PillButtonGroup>
                          </Col>
                          <Col md="6">
                            <PillButtonGroup mGroup>
                              <Button color="success">Left</Button>
                              <Button color="success">Middle</Button>
                              <Button color="success">Right</Button>
                            </PillButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Buttons toolbar" subTitle={PillToolbarTitle}>
                      <Demo>
                        <ButtonToolbar>
                          <PillButtonGroup mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-bold">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-paperclip">{null}</i></Button>
                          </PillButtonGroup>
                          <PillButtonGroup mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          </PillButtonGroup>
                          <PillButtonGroup>
                            <Button color="secondary" mBtn><i className="la la-scissors">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-unlink">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </PillButtonGroup>
                        </ButtonToolbar>
                      </Demo>
                      <Demo>
                        <ButtonToolbar mb3>
                          <PillButtonGroup mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </PillButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                        <ButtonToolbar justify>
                          <PillButtonGroup mGroup>
                            <Button color="primary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="success" mBtn><i className="la la-paperclip">{null}</i></Button>
                            <Button color="warning" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="info" mBtn><i className="la la-scissors">{null}</i></Button>
                          </PillButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Sizing" subTitle={PillSizingSubtitle}>
                      <Demo>
                        <PillButtonGroup mGroup size="lg">
                          <Button outline color="success">Left</Button>
                          <Button outline color="success">Middle</Button>
                          <Button outline color="success">Right</Button>
                        </PillButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <PillButtonGroup mGroup>
                          <Button outline color="warning">Left</Button>
                          <Button outline color="warning">Middle</Button>
                          <Button outline color="warning">Right</Button>
                        </PillButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <PillButtonGroup mGroup size="sm">
                          <Button outline color="info">Left</Button>
                          <Button outline color="info">Middle</Button>
                          <Button outline color="info">Right</Button>
                        </PillButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Nesting" subTitle={PillNestingSubtitle}>
                      <Demo>
                        <PillButtonGroup mGroup>
                          <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          <Dropdown group>
                            <DropdownToggle mBtn mPill caret>
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </PillButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>
                </TabPane>

                <TabPane tabId={2}>
                  <Section>
                    <SectionContent heading="Basic example" subTitle="Basic button group examples">
                      <Demo>
                        <Row>
                          <Col md="6">
                            <AirButtonGroup mGroup>
                              <Button color="secondary">Left</Button>
                              <Button color="secondary">Middle</Button>
                              <Button color="secondary">Right</Button>
                            </AirButtonGroup>
                          </Col>
                          <Col md="6">
                            <AirButtonGroup air mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </AirButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                      <Demo>
                        <Row>
                          <Col md="6">
                            <AirButtonGroup air mGroup>
                              <Button color="brand">Left</Button>
                              <Button color="brand">Middle</Button>
                              <Button color="brand">Right</Button>
                            </AirButtonGroup>
                          </Col>
                          <Col md="6">
                            <AirButtonGroup air mGroup>
                              <Button color="success">Left</Button>
                              <Button color="success">Middle</Button>
                              <Button color="success">Right</Button>
                            </AirButtonGroup>
                          </Col>
                        </Row>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Buttons toolbar" subTitle={AirToolbarTitle}>
                      <Demo>
                        <ButtonToolbar>
                          <ButtonGroup air mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-bold">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-paperclip">{null}</i></Button>
                          </ButtonGroup>
                          <ButtonGroup air mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          </ButtonGroup>
                          <ButtonGroup air>
                            <Button color="secondary" mBtn><i className="la la-scissors">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-unlink">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Demo>
                      <Demo>
                        <ButtonToolbar mb3>
                          <ButtonGroup air mGroup mr2>
                            <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                            <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          </ButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                        <ButtonToolbar justify>
                          <ButtonGroup air mGroup>
                            <Button color="primary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                            <Button color="success" mBtn><i className="la la-paperclip">{null}</i></Button>
                            <Button color="warning" mBtn><i className="la la-files-o">{null}</i></Button>
                            <Button color="info" mBtn><i className="la la-scissors">{null}</i></Button>
                          </ButtonGroup>
                          <InputGroup>
                            <InputGroupAddon tag="span">@</InputGroupAddon>
                            <Input placeholder="Input group example" />
                          </InputGroup>
                        </ButtonToolbar>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Sizing" subTitle={AirSizingSubtitle}>
                      <Demo>
                        <ButtonGroup air mGroup size="lg">
                          <Button outline color="success">Left</Button>
                          <Button outline color="success">Middle</Button>
                          <Button outline color="success">Right</Button>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup air mGroup>
                          <Button outline color="warning">Left</Button>
                          <Button outline color="warning">Middle</Button>
                          <Button outline color="warning">Right</Button>
                        </ButtonGroup>
                        <div className="m--space-10">{null}</div>
                        <ButtonGroup air mGroup size="sm">
                          <Button outline color="info">Left</Button>
                          <Button outline color="info">Middle</Button>
                          <Button outline color="info">Right</Button>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>

                  <Section>
                    <SectionContent heading="Nesting" subTitle={AirNestingSubtitle}>
                      <Demo>
                        <ButtonGroup air mGroup>
                          <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                          <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                          <Dropdown group>
                            <DropdownToggle mBtn mAir caret>
                              Dropdown
                      </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                              <DropdownItem tag="a">Dropdown Link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </ButtonGroup>
                      </Demo>
                    </SectionContent>
                  </Section>
                </TabPane>

              </TabContent>
            </Portlet.Body>
          </Tabs>
        </Portlet>
      </Col>
    </Row>
  </React.Fragment >
);

export default BtnGroup;
