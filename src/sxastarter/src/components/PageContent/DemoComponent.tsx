import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SingleLine: Field<string>;
  RichText: Field<string>;
  Integer: Field<string>;
  Number: Field<string>;
  Date: Field<string>;
  Datetime: Field<string>;
  MultiLine: Field<string>;
  Checklist: Field<unknown>;
  Checkbox: Field<string>;
  Multilist: Field<unknown>;
  MultilistWithSearch: Field<unknown>;
}

export type DemoComponentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: DemoComponentProps): JSX.Element => (
  <div className={`component ${props.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">DemoComponent</span>
    </div>
  </div>
);

export const Default = (props: DemoComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  console.log('DemoComponent', props.fields);

  return props.fields ? (
    <div
      className={`component demo-component ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row g-5">
          SingleLine - <Text field={props.fields.SingleLine} />
        </div>
        {/* <div className="row g-5">
          RichText - <Text field={props.fields.RichText} />
        </div>
        <div className="row g-5">
          Integer - <Text field={props.fields.Integer} />
        </div>
        <div className="row g-5">
          Number - <Text field={props.fields.Number} />
        </div>
        <div className="row g-5">
          Date - <Text field={props.fields.Date} />
        </div>
        <div className="row g-5">
          Datetime - <Text field={props.fields.Datetime} />
        </div>
        <div className="row g-5">
          MultiLine - <Text field={props.fields.MultiLine} />
        </div>
        <div className="row g-5">Checklist - {JSON.stringify(props.fields.Checklist)}</div>
        <div className="row g-5">Checkbox - {JSON.stringify(props.fields.Checkbox)}</div>
        <div className="row g-5">Multilist - {JSON.stringify(props.fields.Multilist)}</div>
        <div className="row g-5">
          MultilistWithSearch - {JSON.stringify(props.fields.MultilistWithSearch)}
        </div> */}
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
