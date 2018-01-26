import React from 'react';
import { SquareButton } from 'common/components/Button/Square';
import { Portlet } from 'common/components/Portlet';
import { Section, SectionContent, Demo, baseSubTitle, sizeSubTitle, stateSubTitle } from './DefaultStyle';

const SquareStyle = () => (
  <React.Fragment>
    <div className="row">
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Base Buttons" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle="Bootstrap state buttons">
                <Demo btn>
                  <SquareButton color="primary">Primary</SquareButton>
                  <SquareButton color="secondary">Secondary</SquareButton>
                  <SquareButton color="success">Success</SquareButton>
                  <SquareButton color="info">Info</SquareButton>
                  <SquareButton color="warning">Warning</SquareButton>
                  <SquareButton color="danger">Danger</SquareButton>
                  <SquareButton color="link">Link</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic custom state buttons">
                <Demo btn>
                  <SquareButton tag="button" color="brand">Brand</SquareButton>
                  <SquareButton tag="button" color="metal">Metal</SquareButton>
                  <SquareButton tag="button" color="accent">Accent</SquareButton>
                  <SquareButton tag="button" color="focus">Focus</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle={baseSubTitle}>
                <Demo btn>
                  <SquareButton tag="a" color="primary" href="">Link</SquareButton>
                  <SquareButton tag="button" color="success">Button</SquareButton>
                  <SquareButton tag="input" type="button" color="warning" value="Input" />
                  <SquareButton tag="input" type="submit" color="info" value="Submit" />
                  <SquareButton tag="input" type="reset" color="danger" value="Reset" />
                  <SquareButton tag="a" color="metal" href="">Metal</SquareButton>
                  <SquareButton tag="button" type="reset" color="brand">Brand</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Wide bootstrap buttons">
                <Demo btn>
                  <SquareButton tag="button" color="primary" wide>Primary</SquareButton>
                  <SquareButton tag="button" color="secondary" wide>Secondary</SquareButton>
                  <SquareButton tag="button" color="success" wide>Success</SquareButton>
                  <SquareButton tag="button" color="info" wide>Info</SquareButton>
                  <SquareButton tag="button" color="warning" wide>Warning</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Outline Buttons" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle="Bootstrap outline buttons">
                <Demo btn>
                  <SquareButton outline color="primary">Primary</SquareButton>
                  <SquareButton outline color="success">Success</SquareButton>
                  <SquareButton outline color="info">Info</SquareButton><br />
                  <SquareButton outline color="warning">Warning</SquareButton>
                  <SquareButton outline color="danger">Danger</SquareButton><br />
                  <div className="m--space-10" />
                  <SquareButton outline color="brand">Brand</SquareButton>
                  <SquareButton outline color="metal">Metal</SquareButton>
                  <SquareButton outline color="accent">Accent</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Bootstrap outline 2x buttons">
                <Demo btn>
                  <SquareButton outline color="primary" mBtn doubleOutline>Primary</SquareButton>
                  <SquareButton outline color="success" mBtn doubleOutline>Success</SquareButton>
                  <SquareButton outline color="info" mBtn doubleOutline>Info</SquareButton>
                  <SquareButton outline color="warning" mBtn doubleOutline>Warning</SquareButton>
                  <SquareButton outline color="danger" mBtn doubleOutline>Danger</SquareButton><br />
                  <div className="m--space-10" />
                  <SquareButton outline color="brand" mBtn doubleOutline>Brand</SquareButton>
                  <SquareButton outline color="metal" mBtn doubleOutline>Metal</SquareButton>
                  <SquareButton outline color="accent" mBtn doubleOutline>Accent</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Metronic Buttons" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle="Metronic style solid buttons">
                <Demo btn>
                  <SquareButton color="primary" mBtn mBtnCust>Primary</SquareButton>
                  <SquareButton color="brand" mBtn mBtnCust>Brand</SquareButton>
                  <SquareButton color="success" mBtn mBtnCust>Success</SquareButton>
                  <SquareButton color="info" mBtn mBtnCust>Info</SquareButton>
                  <SquareButton color="warning" mBtn mBtnCust>Warning</SquareButton>
                  <SquareButton color="danger" mBtn mBtnCust>Danger</SquareButton>
                  <SquareButton color="accent" mBtn mBtnCust>Accent</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust>Secondary</SquareButton>
                  <div className="m-separator m-separator--dashed" />
                  <SquareButton color="primary" mBtn mBtnCust bolder upper>Primary</SquareButton>
                  <SquareButton color="brand" mBtn mBtnCust bolder upper>Brand</SquareButton>
                  <SquareButton color="success" mBtn mBtnCust bolder upper>Success</SquareButton>
                  <SquareButton color="info" mBtn mBtnCust bolder upper>Info</SquareButton>
                  <SquareButton color="warning" mBtn mBtnCust bolder upper>Warning</SquareButton>
                  <SquareButton color="danger" mBtn mBtnCust bolder upper>Danger</SquareButton>
                  <SquareButton color="accent" mBtn mBtnCust bolder upper>Accent</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder upper>Secondary</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style outline buttons">
                <Demo btn>
                  <SquareButton outline color="primary" mBtn mBtnCust>Primary</SquareButton>
                  <SquareButton outline color="brand" mBtn mBtnCust>Brand</SquareButton>
                  <SquareButton outline color="success" mBtn mBtnCust>Success</SquareButton>
                  <SquareButton outline color="info" mBtn mBtnCust>Info</SquareButton>
                  <SquareButton outline color="warning" mBtn mBtnCust>Warning</SquareButton>
                  <SquareButton outline color="danger" mBtn mBtnCust>Danger</SquareButton>
                  <SquareButton outline color="metal" mBtn mBtnCust>Metal</SquareButton>
                  <SquareButton outline color="accent" mBtn mBtnCust>Accent</SquareButton>
                  <div className="m-separator m-separator--dashed" />
                  <SquareButton outline color="primary" mBtn mBtnCust doubleOutline>Primary</SquareButton>
                  <SquareButton outline color="brand" mBtn mBtnCust doubleOutline>Brand</SquareButton>
                  <SquareButton outline color="success" mBtn mBtnCust doubleOutline>Success</SquareButton>
                  <SquareButton outline color="info" mBtn mBtnCust doubleOutline>Info</SquareButton>
                  <SquareButton outline color="warning" mBtn mBtnCust doubleOutline>Warning</SquareButton>
                  <SquareButton outline color="danger" mBtn mBtnCust doubleOutline>Danger</SquareButton>
                  <SquareButton outline color="metal" mBtn mBtnCust doubleOutline>Metal</SquareButton>
                  <SquareButton outline color="accent" mBtn mBtnCust doubleOutline>Accent</SquareButton>
                  <div className="m-separator m-separator--dashed" />
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="primary">Primary</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="brand">Brand</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="success">Success</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="info">Info</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="warning">Warning</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="danger">Danger</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="metal">Metal</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust labelCol="accent">Accent</SquareButton>
                  <div className="m-separator m-separator--dashed" />
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="primary">Primary</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="brand">Brand</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="success">Success</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="info">Info</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="warning">Warning</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="danger">Danger</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="metal" upper>Metal</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust bolder labelCol="accent" upper>Accent</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
      </div>
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Button Sizes" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle={sizeSubTitle}>
                <Demo btn>
                  <SquareButton color="primary" size="lg">Large button</SquareButton>
                  <SquareButton color="secondary" size="lg">Large button</SquareButton>
                  <SquareButton outline color="success" size="lg">Large button</SquareButton>
                  <SquareButton outline color="info" size="lg">Large button</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary">Default button</SquareButton>
                  <SquareButton color="secondary">Default button</SquareButton>
                  <SquareButton outline color="success">Default button</SquareButton>
                  <SquareButton outline color="info">Default button</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary" size="sm">Small button</SquareButton>
                  <SquareButton color="secondary" size="sm">Small button</SquareButton>
                  <SquareButton outline color="success" size="sm">Small button</SquareButton>
                  <SquareButton outline color="info" size="sm">Small button</SquareButton>
                  <SquareButton outline color="brand " size="sm">Small button</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style buttons sizing">
                <Demo btn>
                  <SquareButton color="primary" size="lg" mBtn mBtnCust>Large button</SquareButton>
                  <SquareButton color="secondary" size="lg" mBtn mBtnCust label>Large button</SquareButton>
                  <SquareButton outline color="success" size="lg" mBtn mBtnCust>Large button</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary" mBtn mBtnCust>Default button</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust label>Default button</SquareButton>
                  <SquareButton outline color="success" mBtn mBtnCust>Default button</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary" size="sm" mBtn mBtnCust>Small button</SquareButton>
                  <SquareButton color="secondary" size="sm" mBtn mBtnCust label>Small button</SquareButton>
                  <SquareButton outline color="success" size="sm" mBtn mBtnCust>Small button</SquareButton>
                  <SquareButton outline color="info" size="sm" mBtn mBtnCust>Small button</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Button States" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle={stateSubTitle}>
                <Demo btn>
                  <SquareButton outline color="primary">Default</SquareButton>
                  <SquareButton outline color="brand">Default</SquareButton>
                  <SquareButton outline color="success">Default</SquareButton><br />
                  <SquareButton outline color="info">Default</SquareButton>
                  <SquareButton outline color="warning">Default</SquareButton>
                  <SquareButton outline color="danger">Default</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton outline color="primary" active>Active</SquareButton>
                  <SquareButton outline color="brand" active>Active</SquareButton>
                  <SquareButton outline color="success" active>Active</SquareButton>
                  <SquareButton outline color="info" active>Active</SquareButton><br />
                  <SquareButton outline color="metal" active>Active</SquareButton>
                  <SquareButton outline color="warning" active>Active</SquareButton>
                  <SquareButton outline color="danger" active>Active</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton outline color="primary" disabled>Disabled</SquareButton>
                  <SquareButton outline color="brand" disabled>Disabled</SquareButton>
                  <SquareButton outline color="success" disabled>Disabled</SquareButton>
                  <SquareButton outline color="info" disabled>Disabled</SquareButton>
                  <SquareButton outline color="warning" disabled>Disabled</SquareButton>
                  <SquareButton outline color="danger" disabled>Disabled</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary">Default</SquareButton>
                  <SquareButton color="secondary">Default</SquareButton>
                  <SquareButton color="success">Default</SquareButton><br />
                  <SquareButton color="info">Default</SquareButton>
                  <SquareButton color="warning">Default</SquareButton>
                  <SquareButton color="danger">Default</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton color="primary" active>Active</SquareButton>
                  <SquareButton color="secondary" active>Active</SquareButton>
                  <SquareButton color="success" active>Active</SquareButton>
                  <SquareButton color="info" active>Active</SquareButton><br />
                  <SquareButton outline color="metal" active>Active</SquareButton>
                  <SquareButton color="warning" active>Active</SquareButton>
                  <SquareButton color="danger" active>Active</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton color="primary" disabled>Disabled</SquareButton>
                  <SquareButton color="secondary" disabled>Disabled</SquareButton>
                  <SquareButton color="success" disabled>Disabled</SquareButton>
                  <SquareButton color="info" disabled>Disabled</SquareButton>
                  <SquareButton color="warning" disabled>Disabled</SquareButton>
                  <SquareButton color="danger" disabled>Disabled</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="success" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="info" mBtn mBtnCust>Default</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton active color="primary" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="secondary" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="success" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="info" mBtn mBtnCust>Active</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton disabled color="primary" mBtn mBtnCust>Disabled</SquareButton>
                  <SquareButton disabled color="secondary" mBtn mBtnCust>Disabled</SquareButton><br />
                  <SquareButton disabled color="success" mBtn mBtnCust>Disabled</SquareButton>
                  <SquareButton disabled color="info" mBtn mBtnCust>Disabled</SquareButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <SquareButton color="primary" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="secondary" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="success" mBtn mBtnCust>Default</SquareButton>
                  <SquareButton color="info" mBtn mBtnCust>Default</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton active color="primary" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="secondary" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="success" mBtn mBtnCust>Active</SquareButton>
                  <SquareButton active color="info" mBtn mBtnCust>Active</SquareButton>
                  <div className="m--space-10" />
                  <SquareButton disabled color="primary" mBtn mBtnCust>Disabled</SquareButton>
                  <SquareButton disabled color="secondary" mBtn mBtnCust>Disabled</SquareButton><br />
                  <SquareButton disabled color="success" mBtn mBtnCust>Disabled</SquareButton>
                  <SquareButton disabled color="info" mBtn mBtnCust>Disabled</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Block Buttons" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent subTitle="Bootstrap block buttons span the full width of a parent">
                <Demo btn>
                  <SquareButton block color="primary">Block level button</SquareButton>
                  <SquareButton block color="secondary">Block level button</SquareButton>
                  <SquareButton outline block color="success">Block level button</SquareButton>
                  <SquareButton outline block color="warning">Block level button</SquareButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>

      </div>
    </div>
  </React.Fragment >
);

export default SquareStyle;
