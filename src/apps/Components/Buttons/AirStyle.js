import React from 'react';
import { AirButton } from 'common/components/Button';
import { Portlet } from 'common/components/Portlet';
import { Section, SectionContent, Demo, baseSubTitle, sizeSubTitle, stateSubTitle } from './DefaultStyle';

const AirStyle = () => (
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
                  <AirButton color="primary">Primary</AirButton>
                  <AirButton color="secondary">Secondary</AirButton>
                  <AirButton color="success">Success</AirButton>
                  <AirButton color="info">Info</AirButton>
                  <AirButton color="warning">Warning</AirButton>
                  <AirButton color="danger">Danger</AirButton>
                  <AirButton color="link">Link</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic custom state buttons">
                <Demo btn>
                  <AirButton tag="button" color="brand">Brand</AirButton>
                  <AirButton tag="button" color="metal">Metal</AirButton>
                  <AirButton tag="button" color="accent">Accent</AirButton>
                  <AirButton tag="button" color="focus">Focus</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle={baseSubTitle}>
                <Demo btn>
                  <AirButton tag="a" color="primary" href="">Link</AirButton>
                  <AirButton tag="button" color="success">Button</AirButton>
                  <AirButton tag="input" type="button" color="warning" value="Input" />
                  <AirButton tag="input" type="submit" color="info" value="Submit" />
                  <AirButton tag="input" type="reset" color="danger" value="Reset" />
                  <AirButton tag="a" color="metal" href="">Metal</AirButton>
                  <AirButton tag="button" type="reset" color="brand">Brand</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Wide bootstrap buttons">
                <Demo btn>
                  <AirButton tag="button" color="primary" wide>Primary</AirButton>
                  <AirButton tag="button" color="secondary" wide>Secondary</AirButton>
                  <AirButton tag="button" color="success" wide>Success</AirButton>
                  <AirButton tag="button" color="info" wide>Info</AirButton>
                  <AirButton tag="button" color="warning" wide>Warning</AirButton>
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
                  <AirButton outline color="primary">Primary</AirButton>
                  <AirButton outline color="success">Success</AirButton>
                  <AirButton outline color="info">Info</AirButton><br />
                  <AirButton outline color="warning">Warning</AirButton>
                  <AirButton outline color="danger">Danger</AirButton><br />
                  <div className="m--space-10" />
                  <AirButton outline color="brand">Brand</AirButton>
                  <AirButton outline color="metal">Metal</AirButton>
                  <AirButton outline color="accent">Accent</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Bootstrap outline 2x buttons">
                <Demo btn>
                  <AirButton outline color="primary" mBtn doubleOutline>Primary</AirButton>
                  <AirButton outline color="success" mBtn doubleOutline>Success</AirButton>
                  <AirButton outline color="info" mBtn doubleOutline>Info</AirButton>
                  <AirButton outline color="warning" mBtn doubleOutline>Warning</AirButton>
                  <AirButton outline color="danger" mBtn doubleOutline>Danger</AirButton><br />
                  <div className="m--space-10" />
                  <AirButton outline color="brand" mBtn doubleOutline>Brand</AirButton>
                  <AirButton outline color="metal" mBtn doubleOutline>Metal</AirButton>
                  <AirButton outline color="accent" mBtn doubleOutline>Accent</AirButton>
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
                  <AirButton color="primary" mBtn mBtnCust>Primary</AirButton>
                  <AirButton color="brand" mBtn mBtnCust>Brand</AirButton>
                  <AirButton color="success" mBtn mBtnCust>Success</AirButton>
                  <AirButton color="info" mBtn mBtnCust>Info</AirButton>
                  <AirButton color="warning" mBtn mBtnCust>Warning</AirButton>
                  <AirButton color="danger" mBtn mBtnCust>Danger</AirButton>
                  <AirButton color="accent" mBtn mBtnCust>Accent</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust>Secondary</AirButton>
                  <div className="m-separator m-separator--dashed" />
                  <AirButton color="primary" mBtn mBtnCust bolder upper>Primary</AirButton>
                  <AirButton color="brand" mBtn mBtnCust bolder upper>Brand</AirButton>
                  <AirButton color="success" mBtn mBtnCust bolder upper>Success</AirButton>
                  <AirButton color="info" mBtn mBtnCust bolder upper>Info</AirButton>
                  <AirButton color="warning" mBtn mBtnCust bolder upper>Warning</AirButton>
                  <AirButton color="danger" mBtn mBtnCust bolder upper>Danger</AirButton>
                  <AirButton color="accent" mBtn mBtnCust bolder upper>Accent</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder upper>Secondary</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style outline buttons">
                <Demo btn>
                  <AirButton outline color="primary" mBtn mBtnCust>Primary</AirButton>
                  <AirButton outline color="brand" mBtn mBtnCust>Brand</AirButton>
                  <AirButton outline color="success" mBtn mBtnCust>Success</AirButton>
                  <AirButton outline color="info" mBtn mBtnCust>Info</AirButton>
                  <AirButton outline color="warning" mBtn mBtnCust>Warning</AirButton>
                  <AirButton outline color="danger" mBtn mBtnCust>Danger</AirButton>
                  <AirButton outline color="metal" mBtn mBtnCust>Metal</AirButton>
                  <AirButton outline color="accent" mBtn mBtnCust>Accent</AirButton>
                  <div className="m-separator m-separator--dashed" />
                  <AirButton outline color="primary" mBtn mBtnCust doubleOutline>Primary</AirButton>
                  <AirButton outline color="brand" mBtn mBtnCust doubleOutline>Brand</AirButton>
                  <AirButton outline color="success" mBtn mBtnCust doubleOutline>Success</AirButton>
                  <AirButton outline color="info" mBtn mBtnCust doubleOutline>Info</AirButton>
                  <AirButton outline color="warning" mBtn mBtnCust doubleOutline>Warning</AirButton>
                  <AirButton outline color="danger" mBtn mBtnCust doubleOutline>Danger</AirButton>
                  <AirButton outline color="metal" mBtn mBtnCust doubleOutline>Metal</AirButton>
                  <AirButton outline color="accent" mBtn mBtnCust doubleOutline>Accent</AirButton>
                  <div className="m-separator m-separator--dashed" />
                  <AirButton color="secondary" mBtn mBtnCust labelCol="primary">Primary</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="brand">Brand</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="success">Success</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="info">Info</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="warning">Warning</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="danger">Danger</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="metal">Metal</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust labelCol="accent">Accent</AirButton>
                  <div className="m-separator m-separator--dashed" />
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="primary">Primary</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="brand">Brand</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="success">Success</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="info">Info</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="warning">Warning</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="danger">Danger</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="metal" upper>Metal</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust bolder labelCol="accent" upper>Accent</AirButton>
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
                  <AirButton color="primary" size="lg">Large button</AirButton>
                  <AirButton color="secondary" size="lg">Large button</AirButton>
                  <AirButton outline color="success" size="lg">Large button</AirButton>
                  <AirButton outline color="info" size="lg">Large button</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary">Default button</AirButton>
                  <AirButton color="secondary">Default button</AirButton>
                  <AirButton outline color="success">Default button</AirButton>
                  <AirButton outline color="info">Default button</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary" size="sm">Small button</AirButton>
                  <AirButton color="secondary" size="sm">Small button</AirButton>
                  <AirButton outline color="success" size="sm">Small button</AirButton>
                  <AirButton outline color="info" size="sm">Small button</AirButton>
                  <AirButton outline color="brand " size="sm">Small button</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style buttons sizing">
                <Demo btn>
                  <AirButton color="primary" size="lg" mBtn mBtnCust>Large button</AirButton>
                  <AirButton color="secondary" size="lg" mBtn mBtnCust label>Large button</AirButton>
                  <AirButton outline color="success" size="lg" mBtn mBtnCust>Large button</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary" mBtn mBtnCust>Default button</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust label>Default button</AirButton>
                  <AirButton outline color="success" mBtn mBtnCust>Default button</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary" size="sm" mBtn mBtnCust>Small button</AirButton>
                  <AirButton color="secondary" size="sm" mBtn mBtnCust label>Small button</AirButton>
                  <AirButton outline color="success" size="sm" mBtn mBtnCust>Small button</AirButton>
                  <AirButton outline color="info" size="sm" mBtn mBtnCust>Small button</AirButton>
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
                  <AirButton outline color="primary">Default</AirButton>
                  <AirButton outline color="brand">Default</AirButton>
                  <AirButton outline color="success">Default</AirButton><br />
                  <AirButton outline color="info">Default</AirButton>
                  <AirButton outline color="warning">Default</AirButton>
                  <AirButton outline color="danger">Default</AirButton>
                  <div className="m--space-10" />
                  <AirButton outline color="primary" active>Active</AirButton>
                  <AirButton outline color="brand" active>Active</AirButton>
                  <AirButton outline color="success" active>Active</AirButton>
                  <AirButton outline color="info" active>Active</AirButton><br />
                  <AirButton outline color="metal" active>Active</AirButton>
                  <AirButton outline color="warning" active>Active</AirButton>
                  <AirButton outline color="danger" active>Active</AirButton>
                  <div className="m--space-10" />
                  <AirButton outline color="primary" disabled>Disabled</AirButton>
                  <AirButton outline color="brand" disabled>Disabled</AirButton>
                  <AirButton outline color="success" disabled>Disabled</AirButton>
                  <AirButton outline color="info" disabled>Disabled</AirButton>
                  <AirButton outline color="warning" disabled>Disabled</AirButton>
                  <AirButton outline color="danger" disabled>Disabled</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary">Default</AirButton>
                  <AirButton color="secondary">Default</AirButton>
                  <AirButton color="success">Default</AirButton><br />
                  <AirButton color="info">Default</AirButton>
                  <AirButton color="warning">Default</AirButton>
                  <AirButton color="danger">Default</AirButton>
                  <div className="m--space-10" />
                  <AirButton color="primary" active>Active</AirButton>
                  <AirButton color="secondary" active>Active</AirButton>
                  <AirButton color="success" active>Active</AirButton>
                  <AirButton color="info" active>Active</AirButton><br />
                  <AirButton outline color="metal" active>Active</AirButton>
                  <AirButton color="warning" active>Active</AirButton>
                  <AirButton color="danger" active>Active</AirButton>
                  <div className="m--space-10" />
                  <AirButton color="primary" disabled>Disabled</AirButton>
                  <AirButton color="secondary" disabled>Disabled</AirButton>
                  <AirButton color="success" disabled>Disabled</AirButton>
                  <AirButton color="info" disabled>Disabled</AirButton>
                  <AirButton color="warning" disabled>Disabled</AirButton>
                  <AirButton color="danger" disabled>Disabled</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="success" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="info" mBtn mBtnCust>Default</AirButton>
                  <div className="m--space-10" />
                  <AirButton active color="primary" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="secondary" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="success" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="info" mBtn mBtnCust>Active</AirButton>
                  <div className="m--space-10" />
                  <AirButton disabled color="primary" mBtn mBtnCust>Disabled</AirButton>
                  <AirButton disabled color="secondary" mBtn mBtnCust>Disabled</AirButton><br />
                  <AirButton disabled color="success" mBtn mBtnCust>Disabled</AirButton>
                  <AirButton disabled color="info" mBtn mBtnCust>Disabled</AirButton>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <AirButton color="primary" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="secondary" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="success" mBtn mBtnCust>Default</AirButton>
                  <AirButton color="info" mBtn mBtnCust>Default</AirButton>
                  <div className="m--space-10" />
                  <AirButton active color="primary" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="secondary" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="success" mBtn mBtnCust>Active</AirButton>
                  <AirButton active color="info" mBtn mBtnCust>Active</AirButton>
                  <div className="m--space-10" />
                  <AirButton disabled color="primary" mBtn mBtnCust>Disabled</AirButton>
                  <AirButton disabled color="secondary" mBtn mBtnCust>Disabled</AirButton><br />
                  <AirButton disabled color="success" mBtn mBtnCust>Disabled</AirButton>
                  <AirButton disabled color="info" mBtn mBtnCust>Disabled</AirButton>
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
                  <AirButton block color="primary">Block level button</AirButton>
                  <AirButton block color="secondary">Block level button</AirButton>
                  <AirButton outline block color="success">Block level button</AirButton>
                  <AirButton outline block color="warning">Block level button</AirButton>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>

      </div>
    </div>
  </React.Fragment >
);

export default AirStyle;
