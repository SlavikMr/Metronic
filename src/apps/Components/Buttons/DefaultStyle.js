import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'common/components/Button';
import { Portlet } from 'common/components/Portlet';

export const baseSubTitle = (
  <React.Fragment>
    The <code>.btn</code> classes are designed to be used with
    <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>,
    and <code>&lt;input&gt;</code>elements.
  </React.Fragment>);

export const sizeSubTitle = (
  <React.Fragment>
    Add  <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
  </React.Fragment>);

export const stateSubTitle = (
  <React.Fragment>
    Add <code>.active</code> for active state and <code>.disabled</code> class
      or <code>disabled="disabled"</code> attribute
  </React.Fragment>);

export const Section = ({ children }) => (
  <div className="m-section">{children}</div>
);

export const SectionContent = ({ subTitle, heading, children }) => (
  <React.Fragment>
    {heading &&
      <h3 className="m-section__heading">{heading}</h3>}
    <span className="m-section__sub">{subTitle}</span>
    <div className="m-section__content">
      {children}
    </div>
  </React.Fragment>
);

export const Demo = ({ btn, children }) => {
  const cls = classNames('m-demo__preview',
    { 'm-demo__preview--btn': btn },
  );

  return (
    <div className="m-demo">
      <div className={cls}>
        {children}
      </div>
    </div>
  );
};

Demo.propTypes = {
  btn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Demo.defaultProps = {
  btn: false,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionContent.propTypes = {
  subTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
};

SectionContent.defaultProps = {
  subTitle: null,
  heading: '',
};

const DefaultStyle = () => (
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
                  <Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="info">Info</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                  <Button color="link">Link</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic custom state buttons">
                <Demo btn>
                  <Button tag="button" color="brand">Brand</Button>
                  <Button tag="button" color="metal">Metal</Button>
                  <Button tag="button" color="accent">Accent</Button>
                  <Button tag="button" color="focus">Focus</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle={baseSubTitle}>
                <Demo btn>
                  <Button tag="a" color="primary" href="">Link</Button>
                  <Button tag="button" color="success">Button</Button>
                  <Button tag="input" type="button" color="warning" value="Input" />
                  <Button tag="input" type="submit" color="info" value="Submit" />
                  <Button tag="input" type="reset" color="danger" value="Reset" />
                  <Button tag="a" color="metal" href="">Metal</Button>
                  <Button tag="button" type="reset" color="brand">Brand</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Wide bootstrap buttons">
                <Demo btn>
                  <Button tag="button" color="primary" wide>Primary</Button>
                  <Button tag="button" color="secondary" wide>Secondary</Button>
                  <Button tag="button" color="success" wide>Success</Button>
                  <Button tag="button" color="info" wide>Info</Button>
                  <Button tag="button" color="warning" wide>Warning</Button>
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
                  <Button outline color="primary">Primary</Button>
                  <Button outline color="success">Success</Button>
                  <Button outline color="info">Info</Button><br />
                  <Button outline color="warning">Warning</Button>
                  <Button outline color="danger">Danger</Button><br />
                  <div className="m--space-10" />
                  <Button outline color="brand">Brand</Button>
                  <Button outline color="metal">Metal</Button>
                  <Button outline color="accent">Accent</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Bootstrap outline 2x buttons">
                <Demo btn>
                  <Button outline color="primary" mBtn doubleOutline>Primary</Button>
                  <Button outline color="success" mBtn doubleOutline>Success</Button>
                  <Button outline color="info" mBtn doubleOutline>Info</Button>
                  <Button outline color="warning" mBtn doubleOutline>Warning</Button>
                  <Button outline color="danger" mBtn doubleOutline>Danger</Button><br />
                  <div className="m--space-10" />
                  <Button outline color="brand" mBtn doubleOutline>Brand</Button>
                  <Button outline color="metal" mBtn doubleOutline>Metal</Button>
                  <Button outline color="accent" mBtn doubleOutline>Accent</Button>
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
                  <Button color="primary" mBtn mBtnCust>Primary</Button>
                  <Button color="brand" mBtn mBtnCust>Brand</Button>
                  <Button color="success" mBtn mBtnCust>Success</Button>
                  <Button color="info" mBtn mBtnCust>Info</Button>
                  <Button color="warning" mBtn mBtnCust>Warning</Button>
                  <Button color="danger" mBtn mBtnCust>Danger</Button>
                  <Button color="accent" mBtn mBtnCust>Accent</Button>
                  <Button color="secondary" mBtn mBtnCust>Secondary</Button>
                  <div className="m-separator m-separator--dashed" />
                  <Button color="primary" mBtn mBtnCust bolder upper>Primary</Button>
                  <Button color="brand" mBtn mBtnCust bolder upper>Brand</Button>
                  <Button color="success" mBtn mBtnCust bolder upper>Success</Button>
                  <Button color="info" mBtn mBtnCust bolder upper>Info</Button>
                  <Button color="warning" mBtn mBtnCust bolder upper>Warning</Button>
                  <Button color="danger" mBtn mBtnCust bolder upper>Danger</Button>
                  <Button color="accent" mBtn mBtnCust bolder upper>Accent</Button>
                  <Button color="secondary" mBtn mBtnCust bolder upper>Secondary</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style outline buttons">
                <Demo btn>
                  <Button outline color="primary" mBtn mBtnCust>Primary</Button>
                  <Button outline color="brand" mBtn mBtnCust>Brand</Button>
                  <Button outline color="success" mBtn mBtnCust>Success</Button>
                  <Button outline color="info" mBtn mBtnCust>Info</Button>
                  <Button outline color="warning" mBtn mBtnCust>Warning</Button>
                  <Button outline color="danger" mBtn mBtnCust>Danger</Button>
                  <Button outline color="metal" mBtn mBtnCust>Metal</Button>
                  <Button outline color="accent" mBtn mBtnCust>Accent</Button>
                  <div className="m-separator m-separator--dashed" />
                  <Button outline color="primary" mBtn mBtnCust doubleOutline>Primary</Button>
                  <Button outline color="brand" mBtn mBtnCust doubleOutline>Brand</Button>
                  <Button outline color="success" mBtn mBtnCust doubleOutline>Success</Button>
                  <Button outline color="info" mBtn mBtnCust doubleOutline>Info</Button>
                  <Button outline color="warning" mBtn mBtnCust doubleOutline>Warning</Button>
                  <Button outline color="danger" mBtn mBtnCust doubleOutline>Danger</Button>
                  <Button outline color="metal" mBtn mBtnCust doubleOutline>Metal</Button>
                  <Button outline color="accent" mBtn mBtnCust doubleOutline>Accent</Button>
                  <div className="m-separator m-separator--dashed" />
                  <Button color="secondary" mBtn mBtnCust labelCol="primary">Primary</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="brand">Brand</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="success">Success</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="info">Info</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="warning">Warning</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="danger">Danger</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="metal">Metal</Button>
                  <Button color="secondary" mBtn mBtnCust labelCol="accent">Accent</Button>
                  <div className="m-separator m-separator--dashed" />
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="primary">Primary</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="brand">Brand</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="success">Success</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="info">Info</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="warning">Warning</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="danger">Danger</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="metal" upper>Metal</Button>
                  <Button color="secondary" mBtn mBtnCust bolder labelCol="accent" upper>Accent</Button>
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
                  <Button color="primary" size="lg">Large button</Button>
                  <Button color="secondary" size="lg">Large button</Button>
                  <Button outline color="success" size="lg">Large button</Button>
                  <Button outline color="info" size="lg">Large button</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary">Default button</Button>
                  <Button color="secondary">Default button</Button>
                  <Button outline color="success">Default button</Button>
                  <Button outline color="info">Default button</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary" size="sm">Small button</Button>
                  <Button color="secondary" size="sm">Small button</Button>
                  <Button outline color="success" size="sm">Small button</Button>
                  <Button outline color="info" size="sm">Small button</Button>
                  <Button outline color="brand " size="sm">Small button</Button>
                </Demo>
              </SectionContent>

              <SectionContent subTitle="Metronic style buttons sizing">
                <Demo btn>
                  <Button color="primary" size="lg" mBtn mBtnCust>Large button</Button>
                  <Button color="secondary" size="lg" mBtn mBtnCust label>Large button</Button>
                  <Button outline color="success" size="lg" mBtn mBtnCust>Large button</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary" mBtn mBtnCust>Default button</Button>
                  <Button color="secondary" mBtn mBtnCust label>Default button</Button>
                  <Button outline color="success" mBtn mBtnCust>Default button</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary" size="sm" mBtn mBtnCust>Small button</Button>
                  <Button color="secondary" size="sm" mBtn mBtnCust label>Small button</Button>
                  <Button outline color="success" size="sm" mBtn mBtnCust>Small button</Button>
                  <Button outline color="info" size="sm" mBtn mBtnCust>Small button</Button>
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
                  <Button outline color="primary">Default</Button>
                  <Button outline color="brand">Default</Button>
                  <Button outline color="success">Default</Button><br />
                  <Button outline color="info">Default</Button>
                  <Button outline color="warning">Default</Button>
                  <Button outline color="danger">Default</Button>
                  <div className="m--space-10" />
                  <Button outline color="primary" active>Active</Button>
                  <Button outline color="brand" active>Active</Button>
                  <Button outline color="success" active>Active</Button>
                  <Button outline color="info" active>Active</Button><br />
                  <Button outline color="metal" active>Active</Button>
                  <Button outline color="warning" active>Active</Button>
                  <Button outline color="danger" active>Active</Button>
                  <div className="m--space-10" />
                  <Button outline color="primary" disabled>Disabled</Button>
                  <Button outline color="brand" disabled>Disabled</Button>
                  <Button outline color="success" disabled>Disabled</Button>
                  <Button outline color="info" disabled>Disabled</Button>
                  <Button outline color="warning" disabled>Disabled</Button>
                  <Button outline color="danger" disabled>Disabled</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary">Default</Button>
                  <Button color="secondary">Default</Button>
                  <Button color="success">Default</Button><br />
                  <Button color="info">Default</Button>
                  <Button color="warning">Default</Button>
                  <Button color="danger">Default</Button>
                  <div className="m--space-10" />
                  <Button color="primary" active>Active</Button>
                  <Button color="secondary" active>Active</Button>
                  <Button color="success" active>Active</Button>
                  <Button color="info" active>Active</Button><br />
                  <Button outline color="metal" active>Active</Button>
                  <Button color="warning" active>Active</Button>
                  <Button color="danger" active>Active</Button>
                  <div className="m--space-10" />
                  <Button color="primary" disabled>Disabled</Button>
                  <Button color="secondary" disabled>Disabled</Button>
                  <Button color="success" disabled>Disabled</Button>
                  <Button color="info" disabled>Disabled</Button>
                  <Button color="warning" disabled>Disabled</Button>
                  <Button color="danger" disabled>Disabled</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary" mBtn mBtnCust>Default</Button>
                  <Button color="secondary" mBtn mBtnCust>Default</Button>
                  <Button color="success" mBtn mBtnCust>Default</Button>
                  <Button color="info" mBtn mBtnCust>Default</Button>
                  <div className="m--space-10" />
                  <Button active color="primary" mBtn mBtnCust>Active</Button>
                  <Button active color="secondary" mBtn mBtnCust>Active</Button>
                  <Button active color="success" mBtn mBtnCust>Active</Button>
                  <Button active color="info" mBtn mBtnCust>Active</Button>
                  <div className="m--space-10" />
                  <Button disabled color="primary" mBtn mBtnCust>Disabled</Button>
                  <Button disabled color="secondary" mBtn mBtnCust>Disabled</Button><br />
                  <Button disabled color="success" mBtn mBtnCust>Disabled</Button>
                  <Button disabled color="info" mBtn mBtnCust>Disabled</Button>
                </Demo>
              </SectionContent>

              <SectionContent>
                <Demo btn>
                  <Button color="primary" mBtn mBtnCust>Default</Button>
                  <Button color="secondary" mBtn mBtnCust>Default</Button>
                  <Button color="success" mBtn mBtnCust>Default</Button>
                  <Button color="info" mBtn mBtnCust>Default</Button>
                  <div className="m--space-10" />
                  <Button active color="primary" mBtn mBtnCust>Active</Button>
                  <Button active color="secondary" mBtn mBtnCust>Active</Button>
                  <Button active color="success" mBtn mBtnCust>Active</Button>
                  <Button active color="info" mBtn mBtnCust>Active</Button>
                  <div className="m--space-10" />
                  <Button disabled color="primary" mBtn mBtnCust>Disabled</Button>
                  <Button disabled color="secondary" mBtn mBtnCust>Disabled</Button><br />
                  <Button disabled color="success" mBtn mBtnCust>Disabled</Button>
                  <Button disabled color="info" mBtn mBtnCust>Disabled</Button>
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
                  <Button block color="primary">Block level button</Button>
                  <Button block color="secondary">Block level button</Button>
                  <Button outline block color="success">Block level button</Button>
                  <Button outline block color="warning">Block level button</Button>
                </Demo>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>

      </div>
    </div>
  </React.Fragment >
);

export default DefaultStyle;
