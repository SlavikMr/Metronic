import React from 'react';
import { Portlet } from 'common/components/Portlet';
import { Button } from 'common/components/Button';

const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.";

const Base = () => (
  <React.Fragment>
    <h3>Default style</h3>
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
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Rounded portlet" subtitle="portlet sub title" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>

        <Portlet>
          <Portlet.Header >
            <Portlet.HeaderCaption title="Non shadow style" subtitle="portlet sub title" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Body>
            <Portlet bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered style" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </Portlet>
            <Portlet semiBordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Semi Bordered Style" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </Portlet>
            <Portlet bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered & Rounded Styles" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </Portlet>
            <Portlet bordered smallHead>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Portlet Small Head" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </Portlet>
            <Portlet bordered>
              <Portlet.Header>
                <Portlet.HeaderCaption title="Bordered, Rounded & Air Styles" />
              </Portlet.Header>
              <Portlet.Body>
                {Lorem}
              </Portlet.Body>
            </Portlet>
          </Portlet.Body>
        </Portlet>
      </div>
      <div className="col-lg-6">
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Icon Title" subtitle="portlet sub title" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Portlet Footer" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
          <Portlet.Footer>
            <div className="row align-items-center">
              <div className="col-lg-6 m--valign-middle">
                Portlet footer:
              </div>
              <div className="col-lg-6 m--align-right">
                <Button tag="button" color="brand">Submit</Button>
                <span className="m--margin-left-10">
                  {'or ' }
                  <a href="#" className="m-link m--font-bold">
                    Cancel
                  </a>
                </span>
              </div>
            </div>
          </Portlet.Footer>
        </Portlet>

        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Scrollable Body" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body scrollable >
            {Lorem}
            {Lorem}
          </Portlet.Body>
          <Portlet.Footer>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <Button type="submit" color="success">Submit</Button>{' '}
                <Button type="submit" color="secondary">Cancel</Button>
              </div>
            </div>
          </Portlet.Footer>
        </Portlet>

        <Portlet>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Portlet Action Icons" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>

        <Portlet dark>
          <Portlet.Header>
            <Portlet.HeaderCaption title="Dark Skin" icon="flaticon-piggy-bank" />
          </Portlet.Header>
          <Portlet.Body>
            {Lorem}
          </Portlet.Body>
        </Portlet>
        <Portlet bgColor="brand">
          <Portlet.Header>
            <Portlet.HeaderCaption title="Solid Background Dark Skin" icon="flaticon-piggy-bank" />
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
