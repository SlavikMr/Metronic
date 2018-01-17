import React from 'react';
import { Button } from 'common/components/Button';
import { ButtonGroup } from 'reactstrap';
import { Portlet } from 'common/components/Portlet';
import PropTypes from 'prop-types';

const longSubTitle = (
  <React.Fragment>
    The <code>.btn</code> classes are designed to be used with
    <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>,
    and <code>&lt;input&gt;</code>elements.
  </React.Fragment>);

function Section(props) {
  return <div className="m-section">{props.children}</div>;
}

function SectionContent(props) {
  const { subTitle } = props;

  return (
    <React.Fragment>
      <span className="m-section__sub">{subTitle}</span>
      <div className="m-section__content">
        <div className="m-demo">
          <div className="m-demo__preview  m-demo__preview--btn">
            {props.children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionContent.propTypes = {
  subTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
};

SectionContent.defaultProps = {
  subTitle: '',
};

const DefaultStyle = () => (
  <div>
    <div className="row">
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Base Buttons" />
          </Portlet.Header>
          <Portlet.Body>
            <Section>

              <SectionContent>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="info">Info</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="link">Link</Button>
              </SectionContent>

              <SectionContent subTitle="Metronic custom state buttons">
                <Button tag="button" color="brand">Brand</Button>
                <Button tag="button" color="metal">Metal</Button>
                <Button tag="button" color="accent">Accent</Button>
                <Button tag="button" color="focus">Focus</Button>
              </SectionContent>

              <SectionContent subTitle={longSubTitle}>
                <Button tag="a" color="primary" href="">Link</Button>
                <Button tag="button" color="success">Button</Button>
                <Button tag="input" type="button" color="warning" value="Input" />
                <Button tag="input" type="submit" color="info" value="Submit" />
                <Button tag="input" type="reset" color="danger" value="Reset" />
                <Button tag="a" color="metal" href="">Metal</Button>
                <Button tag="button" type="reset" color="brand">Brand</Button>
              </SectionContent>

              <SectionContent subTitle="Wide bootstrap buttons">
                <Button tag="button" color="primary" wide>Primary</Button>
                <Button tag="button" color="secondary" wide>Secondary</Button>
                <Button tag="button" color="success" wide>Success</Button>
                <Button tag="button" color="info" wide>Info</Button>
                <Button tag="button" color="warning" wide>Warning</Button>
              </SectionContent>

            </Section>
          </Portlet.Body>
        </Portlet>
      </div>
    </div>
    <div>
      <Button color="primary" size="lg">Large button</Button>
      <Button color="secondary" size="lg">Large button</Button>
      <Button outline color="success" size="lg">Large button</Button>
      <Button outline color="info" size="lg">Large button</Button>
    </div>
    <div>
      <Button color="primary">Default button</Button>
      <Button color="secondary">Default button</Button>
      <Button outline color="success">Default button</Button>
    </div>
    <div>
      <Button color="primary" size="sm">Small button</Button>
      <Button color="secondary" size="sm">Small button</Button>
      <Button outline color="success" size="sm">Small button</Button>
      <Button outline color="info" size="sm">Small button</Button>
      <Button outline color="brand " size="sm">Small button</Button>
    </div>
    <div>
      <Button color="primary" size="lg" mBtn mBtnCust>Large button</Button>
      <Button color="secondary" size="lg" mBtn mBtnCust label>Large button</Button>
      <Button outline color="success" size="lg" mBtn mBtnCust>Large button</Button>
    </div>
    <div>
      <Button color="primary" mBtn mBtnCust>Default button</Button>
      <Button color="secondary" mBtn mBtnCust label>Default button</Button>
      <Button outline color="success" mBtn mBtnCust>Default button</Button>
    </div>
    <div>
      <Button color="primary" size="sm" mBtn mBtnCust>Small button</Button>
      <Button color="secondary" size="sm" mBtn mBtnCust label>Small button</Button>
      <Button outline color="success" size="sm" mBtn mBtnCust>Small button</Button>
      <Button outline color="info" size="sm" mBtn mBtnCust>Small button</Button>
    </div>
    <div>
      <Button outline color="primary">Primary</Button>
      <Button outline color="success">Success</Button>
      <Button outline color="info">Info</Button>
      <Button outline color="warning">Warning</Button>
      <Button outline color="danger">Danger</Button>
      <Button outline color="brand">Brand</Button>
      <Button outline color="metal">Metal</Button>
      <Button outline color="accent">Accent</Button>
    </div>
    <div>
      <Button outline color="primary" mBtn doubleOutline>Primary</Button>
      <Button outline color="success" mBtn doubleOutline>Success</Button>
      <Button outline color="info" mBtn doubleOutline>Info</Button>
      <Button outline color="warning" mBtn doubleOutline>Warning</Button>
      <Button outline color="danger" mBtn doubleOutline>Danger</Button>
      <Button outline color="brand" mBtn doubleOutline>Brand</Button>
      <Button outline color="metal" mBtn doubleOutline>Metal</Button>
      <Button outline color="accent" mBtn doubleOutline>Accent</Button>
    </div>
    <div>
      <Button outline color="primary">Default</Button>
      <Button outline color="brand">Default</Button>
      <Button outline color="success">Default</Button>
      <Button outline color="info">Default</Button>
      <Button outline color="warning">Default</Button>
      <Button outline color="danger">Default</Button>
    </div>
    <div>
      <Button outline color="primary" active>Active</Button>
      <Button outline color="brand" active>Active</Button>
      <Button outline color="success" active>Active</Button>
      <Button outline color="info" active>Active</Button>
      <Button outline color="metal" active>Active</Button>
      <Button outline color="warning" active>Active</Button>
      <Button outline color="danger" active>Active</Button>
    </div>
    <div>
      <Button outline color="primary" disabled>Disabled</Button>
      <Button outline color="brand" disabled>Disabled</Button>
      <Button outline color="success" disabled>Disabled</Button>
      <Button outline color="info" disabled>Disabled</Button>
      <Button outline color="warning" disabled>Disabled</Button>
      <Button outline color="danger" disabled>Disabled</Button>
    </div>
    <div>
      <Button color="primary">Default</Button>
      <Button color="secondary">Default</Button>
      <Button color="success">Default</Button>
      <Button color="info">Default</Button>
      <Button color="warning">Default</Button>
      <Button color="danger">Default</Button>
    </div>
    <div>
      <Button color="primary" active>Active</Button>
      <Button color="secondary" active>Active</Button>
      <Button color="success" active>Active</Button>
      <Button color="info" active>Active</Button>
      <Button outline color="metal" active>Active</Button>
      <Button color="warning" active>Active</Button>
      <Button color="danger" active>Active</Button>
    </div>
    <div>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="secondary" disabled>Disabled</Button>
      <Button color="success" disabled>Disabled</Button>
      <Button color="info" disabled>Disabled</Button>
      <Button color="warning" disabled>Disabled</Button>
      <Button color="danger" disabled>Disabled</Button>
    </div>
    <div>
      <Button color="primary" mBtn mBtnCust>Default</Button>
      <Button color="secondary" mBtn mBtnCust>Default</Button>
      <Button color="success" mBtn mBtnCust>Default</Button>
      <Button color="info" mBtn mBtnCust>Default</Button>
    </div>
    <div>
      <Button active color="primary" mBtn mBtnCust>Active</Button>
      <Button active color="secondary" mBtn mBtnCust>Active</Button>
      <Button active color="success" mBtn mBtnCust>Active</Button>
      <Button active color="info" mBtn mBtnCust>Active</Button>
    </div>
    <div>
      <Button disabled color="primary" mBtn mBtnCust>Disabled</Button>
      <Button disabled color="secondary" mBtn mBtnCust>Disabled</Button>
      <Button disabled color="success" mBtn mBtnCust>Disabled</Button>
      <Button disabled color="info" mBtn mBtnCust>Disabled</Button>
    </div>
    <div>
      <Button color="primary" mBtn mBtnCust>Primary</Button>
      <Button color="brand" mBtn mBtnCust>Brand</Button>
      <Button color="success" mBtn mBtnCust>Success</Button>
      <Button color="info" mBtn mBtnCust>Info</Button>
      <Button color="warning" mBtn mBtnCust>Warning</Button>
      <Button color="danger" mBtn mBtnCust>Danger</Button>
      <Button color="accent" mBtn mBtnCust>Accent</Button>
      <Button color="secondary" mBtn mBtnCust>Secondary</Button>
    </div>
    <div>
      <Button color="primary" mBtn mBtnCust bolder upper>Primary</Button>
      <Button color="brand" mBtn mBtnCust bolder upper>Brand</Button>
      <Button color="success" mBtn mBtnCust bolder upper>Success</Button>
      <Button color="info" mBtn mBtnCust bolder upper>Info</Button>
      <Button color="warning" mBtn mBtnCust bolder upper>Warning</Button>
      <Button color="danger" mBtn mBtnCust bolder upper>Danger</Button>
      <Button color="accent" mBtn mBtnCust bolder upper>Accent</Button>
      <Button color="secondary" mBtn mBtnCust bolder upper>Secondary</Button>
    </div>
    <div>
      <Button outline color="primary" mBtn mBtnCust>Primary</Button>
      <Button outline color="brand" mBtn mBtnCust>Brand</Button>
      <Button outline color="success" mBtn mBtnCust>Success</Button>
      <Button outline color="info" mBtn mBtnCust>Info</Button>
      <Button outline color="warning" mBtn mBtnCust>Warning</Button>
      <Button outline color="danger" mBtn mBtnCust>Danger</Button>
      <Button outline color="metal" mBtn mBtnCust>Metal</Button>
      <Button outline color="accent" mBtn mBtnCust>Accent</Button>
    </div>
    <div>
      <Button outline color="primary" mBtn mBtnCust doubleOutline>Primary</Button>
      <Button outline color="brand" mBtn mBtnCust doubleOutline>Brand</Button>
      <Button outline color="success" mBtn mBtnCust doubleOutline>Success</Button>
      <Button outline color="info" mBtn mBtnCust doubleOutline>Info</Button>
      <Button outline color="warning" mBtn mBtnCust doubleOutline>Warning</Button>
      <Button outline color="danger" mBtn mBtnCust doubleOutline>Danger</Button>
      <Button outline color="metal" mBtn mBtnCust doubleOutline>Metal</Button>
      <Button outline color="accent" mBtn mBtnCust doubleOutline>Accent</Button>
    </div>
    <div>
      <Button color="secondary" mBtn mBtnCust labelCol="primary">Primary</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="brand">Brand</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="success">Success</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="info">Info</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="warning">Warning</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="danger">Danger</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="metal">Metal</Button>
      <Button color="secondary" mBtn mBtnCust labelCol="accent">Accent</Button>
    </div>
    <div>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="primary">Primary</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="brand">Brand</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="success">Success</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="info">Info</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="warning">Warning</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="danger">Danger</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="metal" upper>Metal</Button>
      <Button color="secondary" mBtn mBtnCust bolder labelCol="accent" upper>Accent</Button>
    </div>
    <div>
      <Button block color="primary">Block level button</Button>
      <Button block color="secondary">Block level button</Button>
      <Button outline block color="success">Block level button</Button>
      <Button outline block color="warning">Block level button</Button>
    </div>
    <ButtonGroup>
      <Button active color="success">Checkbox 1</Button>
      <Button color="success">Checkbox 2</Button>
      <Button color="success">Checkbox 3</Button>
    </ButtonGroup>
  </div>
);

export default DefaultStyle;
