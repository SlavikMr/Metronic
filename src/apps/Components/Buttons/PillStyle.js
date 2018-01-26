import React from 'react';
import { PillButton } from 'common/components/Button';
import { Portlet } from 'common/components/Portlet';
import { Section, SectionContent, Demo, baseSubTitle, sizeSubTitle, stateSubTitle } from './DefaultStyle';

const PillStyle = () => (
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
                  <PillButton color="primary">Primary</PillButton>
                  <PillButton color="secondary">Secondary</PillButton>
                  <PillButton color="success">Success</PillButton>
                  <PillButton color="info">Info</PillButton>
                  <PillButton color="warning">Warning</PillButton>
                  <PillButton color="danger">Danger</PillButton>
                  <PillButton color="link">Link</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic custom state buttons">
                <Demo btn>
                  <PillButton tag="button" color="brand">Brand</PillButton>
                  <PillButton tag="button" color="metal">Metal</PillButton>
                  <PillButton tag="button" color="accent">Accent</PillButton>
                  <PillButton tag="button" color="focus">Focus</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle={baseSubTitle}>
                <Demo btn>
                  <PillButton tag="a" color="primary" href="">Link</PillButton>
                  <PillButton tag="button" color="success">Button</PillButton>
                  <PillButton tag="input" type="button" color="warning" value="Input" />
                  <PillButton tag="input" type="submit" color="info" value="Submit" />
                  <PillButton tag="input" type="reset" color="danger" value="Reset" />
                  <PillButton tag="a" color="metal" href="">Metal</PillButton>
                  <PillButton tag="button" type="reset" color="brand">Brand</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Wide bootstrap buttons">
                <Demo btn>
                  <PillButton tag="button" color="primary" wide>Primary</PillButton>
                  <PillButton tag="button" color="secondary" wide>Secondary</PillButton>
                  <PillButton tag="button" color="success" wide>Success</PillButton>
                  <PillButton tag="button" color="info" wide>Info</PillButton>
                  <PillButton tag="button" color="warning" wide>Warning</PillButton>
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
                  <PillButton outline color="primary">Primary</PillButton>
                  <PillButton outline color="success">Success</PillButton>
                  <PillButton outline color="info">Info</PillButton><br />
                  <PillButton outline color="warning">Warning</PillButton>
                  <PillButton outline color="danger">Danger</PillButton><br />
                  <div className="m--space-10" />
                  <PillButton outline color="brand">Brand</PillButton>
                  <PillButton outline color="metal">Metal</PillButton>
                  <PillButton outline color="accent">Accent</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Bootstrap outline 2x buttons">
                <Demo btn>
                  <PillButton outline color="primary" mBtn doubleOutline>Primary</PillButton>
                  <PillButton outline color="success" mBtn doubleOutline>Success</PillButton>
                  <PillButton outline color="info" mBtn doubleOutline>Info</PillButton>
                  <PillButton outline color="warning" mBtn doubleOutline>Warning</PillButton>
                  <PillButton outline color="danger" mBtn doubleOutline>Danger</PillButton><br />
                  <div className="m--space-10" />
                  <PillButton outline color="brand" mBtn doubleOutline>Brand</PillButton>
                  <PillButton outline color="metal" mBtn doubleOutline>Metal</PillButton>
                  <PillButton outline color="accent" mBtn doubleOutline>Accent</PillButton>
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
                  <PillButton color="primary" mBtn mBtnCust>Primary</PillButton>
                  <PillButton color="brand" mBtn mBtnCust>Brand</PillButton>
                  <PillButton color="success" mBtn mBtnCust>Success</PillButton>
                  <PillButton color="info" mBtn mBtnCust>Info</PillButton>
                  <PillButton color="warning" mBtn mBtnCust>Warning</PillButton>
                  <PillButton color="danger" mBtn mBtnCust>Danger</PillButton>
                  <PillButton color="accent" mBtn mBtnCust>Accent</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust>Secondary</PillButton>
                  <div className="m-separator m-separator--dashed" />
                  <PillButton color="primary" mBtn mBtnCust bolder upper>Primary</PillButton>
                  <PillButton color="brand" mBtn mBtnCust bolder upper>Brand</PillButton>
                  <PillButton color="success" mBtn mBtnCust bolder upper>Success</PillButton>
                  <PillButton color="info" mBtn mBtnCust bolder upper>Info</PillButton>
                  <PillButton color="warning" mBtn mBtnCust bolder upper>Warning</PillButton>
                  <PillButton color="danger" mBtn mBtnCust bolder upper>Danger</PillButton>
                  <PillButton color="accent" mBtn mBtnCust bolder upper>Accent</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder upper>Secondary</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style outline buttons">
                <Demo btn>
                  <PillButton outline color="primary" mBtn mBtnCust>Primary</PillButton>
                  <PillButton outline color="brand" mBtn mBtnCust>Brand</PillButton>
                  <PillButton outline color="success" mBtn mBtnCust>Success</PillButton>
                  <PillButton outline color="info" mBtn mBtnCust>Info</PillButton>
                  <PillButton outline color="warning" mBtn mBtnCust>Warning</PillButton>
                  <PillButton outline color="danger" mBtn mBtnCust>Danger</PillButton>
                  <PillButton outline color="metal" mBtn mBtnCust>Metal</PillButton>
                  <PillButton outline color="accent" mBtn mBtnCust>Accent</PillButton>
                  <div className="m-separator m-separator--dashed" />
                  <PillButton outline color="primary" mBtn mBtnCust doubleOutline>Primary</PillButton>
                  <PillButton outline color="brand" mBtn mBtnCust doubleOutline>Brand</PillButton>
                  <PillButton outline color="success" mBtn mBtnCust doubleOutline>Success</PillButton>
                  <PillButton outline color="info" mBtn mBtnCust doubleOutline>Info</PillButton>
                  <PillButton outline color="warning" mBtn mBtnCust doubleOutline>Warning</PillButton>
                  <PillButton outline color="danger" mBtn mBtnCust doubleOutline>Danger</PillButton>
                  <PillButton outline color="metal" mBtn mBtnCust doubleOutline>Metal</PillButton>
                  <PillButton outline color="accent" mBtn mBtnCust doubleOutline>Accent</PillButton>
                  <div className="m-separator m-separator--dashed" />
                  <PillButton color="secondary" mBtn mBtnCust labelCol="primary">Primary</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="brand">Brand</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="success">Success</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="info">Info</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="warning">Warning</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="danger">Danger</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="metal">Metal</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust labelCol="accent">Accent</PillButton>
                  <div className="m-separator m-separator--dashed" />
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="primary">Primary</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="brand">Brand</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="success">Success</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="info">Info</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="warning">Warning</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="danger">Danger</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="metal" upper>Metal</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust bolder labelCol="accent" upper>Accent</PillButton>
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
                  <PillButton color="primary" size="lg">Large button</PillButton>
                  <PillButton color="secondary" size="lg">Large button</PillButton>
                  <PillButton outline color="success" size="lg">Large button</PillButton>
                  <PillButton outline color="info" size="lg">Large button</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary">Default button</PillButton>
                  <PillButton color="secondary">Default button</PillButton>
                  <PillButton outline color="success">Default button</PillButton>
                  <PillButton outline color="info">Default button</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary" size="sm">Small button</PillButton>
                  <PillButton color="secondary" size="sm">Small button</PillButton>
                  <PillButton outline color="success" size="sm">Small button</PillButton>
                  <PillButton outline color="info" size="sm">Small button</PillButton>
                  <PillButton outline color="brand " size="sm">Small button</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style buttons sizing">
                <Demo btn>
                  <PillButton color="primary" size="lg" mBtn mBtnCust>Large button</PillButton>
                  <PillButton color="secondary" size="lg" mBtn mBtnCust label>Large button</PillButton>
                  <PillButton outline color="success" size="lg" mBtn mBtnCust>Large button</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary" mBtn mBtnCust>Default button</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust label>Default button</PillButton>
                  <PillButton outline color="success" mBtn mBtnCust>Default button</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary" size="sm" mBtn mBtnCust>Small button</PillButton>
                  <PillButton color="secondary" size="sm" mBtn mBtnCust label>Small button</PillButton>
                  <PillButton outline color="success" size="sm" mBtn mBtnCust>Small button</PillButton>
                  <PillButton outline color="info" size="sm" mBtn mBtnCust>Small button</PillButton>
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
                  <PillButton outline color="primary">Default</PillButton>
                  <PillButton outline color="brand">Default</PillButton>
                  <PillButton outline color="success">Default</PillButton><br />
                  <PillButton outline color="info">Default</PillButton>
                  <PillButton outline color="warning">Default</PillButton>
                  <PillButton outline color="danger">Default</PillButton>
                  <div className="m--space-10" />
                  <PillButton outline color="primary" active>Active</PillButton>
                  <PillButton outline color="brand" active>Active</PillButton>
                  <PillButton outline color="success" active>Active</PillButton>
                  <PillButton outline color="info" active>Active</PillButton><br />
                  <PillButton outline color="metal" active>Active</PillButton>
                  <PillButton outline color="warning" active>Active</PillButton>
                  <PillButton outline color="danger" active>Active</PillButton>
                  <div className="m--space-10" />
                  <PillButton outline color="primary" disabled>Disabled</PillButton>
                  <PillButton outline color="brand" disabled>Disabled</PillButton>
                  <PillButton outline color="success" disabled>Disabled</PillButton>
                  <PillButton outline color="info" disabled>Disabled</PillButton>
                  <PillButton outline color="warning" disabled>Disabled</PillButton>
                  <PillButton outline color="danger" disabled>Disabled</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary">Default</PillButton>
                  <PillButton color="secondary">Default</PillButton>
                  <PillButton color="success">Default</PillButton><br />
                  <PillButton color="info">Default</PillButton>
                  <PillButton color="warning">Default</PillButton>
                  <PillButton color="danger">Default</PillButton>
                  <div className="m--space-10" />
                  <PillButton color="primary" active>Active</PillButton>
                  <PillButton color="secondary" active>Active</PillButton>
                  <PillButton color="success" active>Active</PillButton>
                  <PillButton color="info" active>Active</PillButton><br />
                  <PillButton outline color="metal" active>Active</PillButton>
                  <PillButton color="warning" active>Active</PillButton>
                  <PillButton color="danger" active>Active</PillButton>
                  <div className="m--space-10" />
                  <PillButton color="primary" disabled>Disabled</PillButton>
                  <PillButton color="secondary" disabled>Disabled</PillButton>
                  <PillButton color="success" disabled>Disabled</PillButton>
                  <PillButton color="info" disabled>Disabled</PillButton>
                  <PillButton color="warning" disabled>Disabled</PillButton>
                  <PillButton color="danger" disabled>Disabled</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="success" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="info" mBtn mBtnCust>Default</PillButton>
                  <div className="m--space-10" />
                  <PillButton active color="primary" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="secondary" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="success" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="info" mBtn mBtnCust>Active</PillButton>
                  <div className="m--space-10" />
                  <PillButton disabled color="primary" mBtn mBtnCust>Disabled</PillButton>
                  <PillButton disabled color="secondary" mBtn mBtnCust>Disabled</PillButton><br />
                  <PillButton disabled color="success" mBtn mBtnCust>Disabled</PillButton>
                  <PillButton disabled color="info" mBtn mBtnCust>Disabled</PillButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <PillButton color="primary" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="secondary" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="success" mBtn mBtnCust>Default</PillButton>
                  <PillButton color="info" mBtn mBtnCust>Default</PillButton>
                  <div className="m--space-10" />
                  <PillButton active color="primary" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="secondary" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="success" mBtn mBtnCust>Active</PillButton>
                  <PillButton active color="info" mBtn mBtnCust>Active</PillButton>
                  <div className="m--space-10" />
                  <PillButton disabled color="primary" mBtn mBtnCust>Disabled</PillButton>
                  <PillButton disabled color="secondary" mBtn mBtnCust>Disabled</PillButton><br />
                  <PillButton disabled color="success" mBtn mBtnCust>Disabled</PillButton>
                  <PillButton disabled color="info" mBtn mBtnCust>Disabled</PillButton>
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
                  <PillButton block color="primary">Block level button</PillButton>
                  <PillButton block color="secondary">Block level button</PillButton>
                  <PillButton outline block color="success">Block level button</PillButton>
                  <PillButton outline block color="warning">Block level button</PillButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>

      </div>
    </div>
  </React.Fragment >
);

export default PillStyle;
