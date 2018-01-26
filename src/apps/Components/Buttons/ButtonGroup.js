import React from 'react';
import {
  Row, Col, InputGroup, InputGroupAddon, Input,
  DropdownMenu,
} from 'reactstrap';
import { Button } from 'common/components/Button/Default';
import { Portlet } from 'common/components/Portlet';
import { ButtonGroup } from 'common/components/Button/Group';
import { PillButtonGroup } from 'common/components/Button/PillGroup';
import { ButtonDropdown } from 'common/components/Button/ButtonDropdown';
import { DropdownItem } from 'common/components/Button/DropdownItem';
import { ButtonToolbar } from 'common/components/Button/Toolbar';
import { DropdownToggle } from 'common/components/Button/DropdownToggle';
import { Section, SectionContent, Demo } from './DefaultStyle';

const toolbarTitle = (
  <React.Fragment>
    Combine sets of <code> btn-group </code> into a <code>btn-toolbar</code>
    for more complex components.
  </React.Fragment>);

const pillToolbarTitle = (
  <React.Fragment>
    Combine sets of <code>m-btn-group m-btn-group--pill btn-group </code> into a
    <code>btn-toolbar</code>
    for more complex components.
  </React.Fragment>);

const pillSizingSubtitle = (
  <React.Fragment>
    Instead of applying button sizing classes to every button in a group, just add
    <code>.m-btn-group m-btn-group--pill.btn-group-*</code> to each
    <code>.m-btn-groupm-btn-group--pill.btn-group</code>,including
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

const pillNestingSubtitle = (
  <React.Fragment>
    Place a .m-btn-group m-btn-group--pill .btn-group within another
    <code>.m-btn-groupm-btn-group--pill.btn-group</code>when you want dropdown
    menus mixed with a series of buttons.
  </React.Fragment>
);

const BtnGroup = () => (
  <React.Fragment>
    <Row>
      <Col lg="6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Base Buttons" />
          </Portlet.Header>
          <Portlet.Body>

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
                      <Button color="secondary" mBtn><i className="la la-paperclip">{null}}</i></Button>
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
                    <ButtonDropdown>
                      <DropdownToggle caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                </Demo>
              </SectionContent>
            </Section>

            <Section>
              <SectionContent heading="Vertical" subTitle={verticalSubtitle}>
                <Demo>
                  <ButtonGroup vertical>
                    <Button color="secondary">Button</Button>
                    <ButtonDropdown>
                      <DropdownToggle caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <Button color="secondary">Button</Button>
                    <ButtonDropdown>
                      <DropdownToggle caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                  </ButtonGroup>
                </Demo>
              </SectionContent>
            </Section>

          </Portlet.Body>
        </Portlet>
      </Col>
      <Col lg="6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Custom Buttons" />
          </Portlet.Header>
          <Portlet.Body>

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
              <SectionContent heading="Buttons toolbar" subTitle={pillToolbarTitle}>
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
              <SectionContent heading="Sizing" subTitle={pillSizingSubtitle}>
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
              <SectionContent heading="Nesting" subTitle={pillNestingSubtitle}>
                <Demo>
                  <PillButtonGroup mGroup>
                    <Button color="secondary" mBtn><i className="la la-file-text-o">{null}</i></Button>
                    <Button color="secondary" mBtn><i className="la la-floppy-o">{null}</i></Button>
                    <Button color="secondary" mBtn><i className="la la-header">{null}</i></Button>
                    <Button color="secondary" mBtn><i className="la la-italic">{null}</i></Button>
                    <ButtonDropdown mGroup>
                      <DropdownToggle mBtn mPill caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </PillButtonGroup>
                </Demo>
              </SectionContent>
            </Section>
          </Portlet.Body>
        </Portlet>
      </Col>
    </Row>
  </React.Fragment >
);

export default BtnGroup;
