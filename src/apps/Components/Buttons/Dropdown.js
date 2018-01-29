import React from 'react';
import { Row, Col } from 'reactstrap';
import { Portlet } from 'common/components/Portlet';
import { Dropdown } from 'common/components/Button/Dropdown';
import { DropdownToggle } from 'common/components/Button/DropdownToggle';
import { DropdownMenu } from 'common/components/Button/DropdownMenu';
import { DropdownItem } from 'common/components/Button/DropdownItem';
import { Button } from 'common/components/Button/Default';
import { Section, SectionContent, Demo } from './DefaultStyle';

const sizing = (
  <React.Fragment>
    Button dropdowns work with buttons of all sizes,
  including default and split dropdown buttons.
  </React.Fragment>);

const items = (
  <React.Fragment>
    You can optionally use <code>button</code> elements in your dropdowns instead
  </React.Fragment>);

const dropup = (
  <React.Fragment>
    Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.
  </React.Fragment>);

const aligment = (
  <React.Fragment>
    Add <code>.dropdown-menu-right</code> to a <code>.dropdown-menu</code>
    to right align the dropdown menu.
  </React.Fragment>);

const headers = (
  <React.Fragment>
    Add a header to label sections of actions in any dropdown menu.
  </React.Fragment>);

const dividers = (
  <React.Fragment>
    Separate groups of related menu items with a divider.
  </React.Fragment>);

const disabled = (
  <React.Fragment>
    Add <code>.disabled</code> to items in the dropdown to style them as disabled.
  </React.Fragment>);

const BtnDropdown = () => (
  <React.Fragment>
    <Row>
      <Col md="6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Dropdown Button" />
          </Portlet.Header>
          <Portlet.Body>

            <Section>
              <SectionContent heading="Basic example" subTitle="Single button dropdowns">
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown>
                        <DropdownToggle caret>
                          Dropdown button
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="brand" caret>
                          Dropdown button
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="success" caret>
                          Dropdown button
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Dropdown menu with icons">
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="accent" caret>
                          Lineawesome
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a"><i className="la la-bell">{null}</i>Action</DropdownItem>
                          <DropdownItem tag="a"><i className="la la-cloud-upload">{null}</i>Another Action</DropdownItem>
                          <DropdownItem tag="a"><i className="la la-cog">{null}</i>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="brand" caret>
                          Fontawesome
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a"><i className="fa fa-bell">{null}</i>Action</DropdownItem>
                          <DropdownItem tag="a"><i className="fa fa-cloud-upload">{null}</i>Another Action</DropdownItem>
                          <DropdownItem tag="a"><i className="fa fa-cog">{null}</i>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="primary" caret>
                          Metronic icons
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a"><i className="flaticon-share">{null}</i>Action</DropdownItem>
                          <DropdownItem tag="a"><i className="flaticon-settings">{null}</i>Another Action</DropdownItem>
                          <DropdownItem tag="a"><i className="flaticon-graphic-2">{null}</i>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Button state dropdowns">
                <Demo>
                  <Dropdown group>
                    <DropdownToggle color="primary" caret>
                      Primary
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <DropdownToggle color="secondary" caret>
                      Secondary
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <DropdownToggle color="success" caret>
                      Success
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <DropdownToggle color="info" caret>
                      Info
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <DropdownToggle color="danger" caret>
                      Danger
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Single button dropdowns">
                <Demo>
                  <Dropdown group>
                    <Button color="primary">Primary</Button>
                    <DropdownToggle split color="primary" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <Button color="brand">Secondary</Button>
                    <DropdownToggle split color="brand" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <Button color="success">Success</Button>
                    <DropdownToggle split color="success" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <Button color="warning">Warning</Button>
                    <DropdownToggle split color="warning" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Demo>
              </SectionContent>
            </Section>

            <Section>
              <SectionContent heading="Sizing" subTitle={sizing}>
                <Demo>
                  <Dropdown group>
                    <DropdownToggle size="lg" color="secondary" caret>Large button</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <Button size="lg" color="secondary">Large split button</Button>
                    <DropdownToggle split size="lg" color="secondary" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <div className="m--space-10">{null}</div>
                  <Dropdown group>
                    <DropdownToggle size="sm" color="secondary" caret>Small button</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown group>
                    <Button size="sm" color="brand">Small split button</Button>
                    <DropdownToggle split size="sm" color="brand" caret />
                    <DropdownMenu>
                      <DropdownItem tag="a">Action</DropdownItem>
                      <DropdownItem tag="a">Another Action</DropdownItem>
                      <DropdownItem tag="a">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Demo>
              </SectionContent>
            </Section>

            <Section>
              <SectionContent heading="Dropup variation" subTitle={dropup}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown group dropup>
                        <DropdownToggle color="secondary" caret>Dropup button</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group dropup>
                        <DropdownToggle outline color="primary" caret>Dropup button</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group dropup>
                        <Button outline color="success">Split dropup button</Button>
                        <DropdownToggle outline split color="success" caret />
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>

          </Portlet.Body>
        </Portlet>
      </Col>
      <Col md="6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Dropdown Button" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>
              <SectionContent heading="Menu items" subTitle={items}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown>
                        <DropdownToggle caret>
                          Dropdown menu
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="primary" caret>
                          Dropdown menu
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown>
                        <DropdownToggle color="brand" caret>
                          Dropdown menu
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>
            <Section>
              <SectionContent heading="Menu alignment" subTitle={aligment}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="brand" caret>
                          Right aligned
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle outline color="primary" caret>
                          Right aligned
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle outline color="danger" caret>
                          Right aligned
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>
            <Section>
              <SectionContent heading="Menu headers" subTitle={headers}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="secondary" caret>
                          Button header
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem header>Dropdown header</DropdownItem>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem tag="a" divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle outline color="brand" caret>
                          Button header
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem header>Dropdown header</DropdownItem>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem tag="a" divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <Button outline color="success">Button header</Button>
                        <DropdownToggle outline split color="success" caret />
                        <DropdownMenu>
                          <DropdownItem header>Dropdown header</DropdownItem>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>
            <Section>
              <SectionContent heading="Menu dividers" subTitle={dividers}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="brand" caret>
                          Button divider
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="primary" caret>
                          Button divider
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="success" caret>
                          Button divider
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Action</DropdownItem>
                          <DropdownItem tag="a">Another Action</DropdownItem>
                          <DropdownItem tag="a">Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem tag="a">Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>
            <Section>
              <SectionContent heading="Disabled menu items" subTitle={disabled}>
                <Demo>
                  <Row>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="warning" caret>
                          Button disabled
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                          <DropdownItem tag="a" disabled>Disabled link</DropdownItem>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="brand" caret>
                          Button disabled
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                          <DropdownItem tag="a" disabled>Disabled link</DropdownItem>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown group>
                        <DropdownToggle color="danger" caret>
                          Button disabled
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                          <DropdownItem tag="a" disabled>Disabled link</DropdownItem>
                          <DropdownItem tag="a">Regular link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Demo>
              </SectionContent>
            </Section>
          </Portlet.Body>
        </Portlet>
      </Col>
    </Row>
  </React.Fragment>
);

export default BtnDropdown;
