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
  Droplist: Field<string>;
  Droplink: Field<unknown>;
  Taglist: Field<unknown>;
  GeneralLink: Field<unknown>;
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
        <div className="row pt-2">
          SingleLine - <Text field={props.fields.SingleLine} />
        </div>
        <div className="row pt-2">
          RichText - <Text field={props.fields.RichText} />
        </div>
        <div className="row pt-2">
          Integer - <Text field={props.fields.Integer} />
        </div>
        <div className="row pt-2">
          Number - <Text field={props.fields.Number} />
        </div>
        <div className="row pt-2">
          Date - <Text field={props.fields.Date} />
        </div>
        <div className="row pt-2">
          Datetime - <Text field={props.fields.Datetime} />
        </div>
        <div className="row pt-2">
          MultiLine - <Text field={props.fields.MultiLine} />
        </div>
        <div className="row pt-2">Checklist - {JSON.stringify(props.fields.Checklist.value)}</div>
        <div className="row pt-2">Checkbox - {props.fields.Checkbox.value.toString()}</div>
        <div className="row pt-2">Multilist - {JSON.stringify(props.fields.Multilist.value)}</div>
        <div className="row pt-2">
          MultilistWithSearch - {JSON.stringify(props.fields.MultilistWithSearch.value)}
        </div>
        <div className="row pt-2">Droplist - {props.fields.Droplist.value}</div>
        <div className="row pt-2">Droplink - {JSON.stringify(props.fields.Droplink.value)}</div>
        <div className="row pt-2">Taglist - {JSON.stringify(props.fields.Taglist.value)}</div>
        <div className="row pt-2">
          GeneralLink - {JSON.stringify(props.fields.GeneralLink.value)}
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
