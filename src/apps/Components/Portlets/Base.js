import React from 'react';
import Portlet from 'common/components/Portlet/Portlet';
import PortletRounded from 'common/components/Portlet/PortletRounded';
import PortletNonShadow from 'common/components/Portlet/PortletNonShadow';
import Icon from 'common/components/Portlet/PortletParts/Icon';
import ToolsIcon from 'common/components/Portlet/PortletParts/ToolsIcon';

const iconList = [
  <ToolsIcon />,
  <ToolsIcon />,
  <ToolsIcon />,
];

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.";

const Base = () => (
  <React.Fragment>
    <h3>Base 1</h3>
    <div className="row">
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Basic portlet" subtitle="portlet sub title" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <PortletRounded>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Rounded portlet" subtitle="portlet sub title" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </PortletRounded>

        <PortletNonShadow>
          <Portlet.Header >
            <Portlet.HeaderCaption title="Non shadow style" subtitle="portlet sub title" icon={Icon} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
          <Portlet.Footer>I am portlet footer</Portlet.Footer>
        </PortletNonShadow>
        <Portlet>
          <Portlet.Body>
            <PortletNonShadow bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered style" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </PortletNonShadow>
            <PortletRounded semiBordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Semi Bordered Style" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </PortletRounded>
            <PortletRounded bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered & Rounded Styles" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </PortletRounded>
            <PortletRounded bordered smallHead>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Portlet Small Head" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </PortletRounded>
            <PortletRounded bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered, Rounded & Air Styles" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </PortletRounded>
          </Portlet.Body>
        </Portlet>
      </div>
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Icon Title" subtitle="portlet sub title" icon={Icon} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Portlet Footer" icon={Icon} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
          <Portlet.Footer>Portlet footer:</Portlet.Footer>
        </Portlet>

        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Portlet Action Icons" icon={Icon} />
            <Portlet.Tools navLinks={iconList} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Scrollable Body" icon={Icon} />
          </Portlet.Header>
          <Portlet.Body scrollable>
            {Lorem}
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet dark>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Dark Skin" icon={Icon} />
            <Portlet.Tools navLinks={iconList} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet bg="brand">
          <Portlet.Header>
            <Portlet.HeaderCaption title="Solid Background Dark Skin" icon={Icon} />
            <Portlet.Tools navLinks={iconList} />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
      </div>
    </div>
  </React.Fragment>
);

export default Base;
