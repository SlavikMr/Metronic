import React from 'react';
import { Portlet } from 'common/components/Portlet';

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.";

const Base = () => (
  <React.Fragment>
    <h3>Tabbed</h3>
    <div className="row">
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Tabbed portlet" subtitle="portlet sub title" />
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
