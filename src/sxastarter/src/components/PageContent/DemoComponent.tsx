import React from 'react';
import { Field, Link, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

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
  GeneralLink: Field<LinkField>;
  FileField: Field<unknown>;
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
          <strong>SingleLine</strong>
          <Text field={props.fields.SingleLine} />
        </div>
        <div className="row pt-2">
          <strong>RichText</strong>
          <RichText field={props.fields.RichText} />
        </div>
        <div className="row pt-2">
          <strong>Integer</strong>
          <Text field={props.fields.Integer} />
        </div>
        <div className="row pt-2">
          <strong>Number</strong>
          <Text field={props.fields.Number} />
        </div>
        <div className="row pt-2">
          <strong>Date</strong>
          <Text field={props.fields.Date} />
        </div>
        <div className="row pt-2">
          <strong>Datetime</strong>
          <Text field={props.fields.Datetime} />
        </div>
        <div className="row pt-2">
          <strong>MultiLine</strong>
          <Text field={props.fields.MultiLine} />
        </div>
        <div className="row pt-2">
          <strong>Checklist</strong>
          {Array.isArray(props.fields.Checklist.value)
            ? props.fields.Checklist.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </div>
        <div className="row pt-2">
          <strong>Checkbox</strong>
          {props.fields.Checkbox.value.toString()}
        </div>
        <div className="row pt-2">
          <strong>Multilist</strong>
          {Array.isArray(props.fields.Multilist.value)
            ? props.fields.Multilist.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </div>
        <div className="row pt-2">
          <strong>MultilistWithSearch</strong>
          {Array.isArray(props.fields.MultilistWithSearch.value)
            ? props.fields.MultilistWithSearch.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </div>
        <div className="row pt-2">
          <strong>Droplist</strong>
          {props.fields.Droplist.value}
        </div>
        <div className="row pt-2">
          <strong>Droplink</strong>
          {Array.isArray(props.fields.Droplink.value)
            ? props.fields.Droplink.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </div>
        <div className="row pt-2">
          <strong>Taglist</strong>
          {Array.isArray(props.fields.Taglist.value)
            ? props.fields.Taglist.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </div>
        <div className="row pt-2">
          <strong>GeneralLink</strong>
          <Link field={props.fields.GeneralLink.value} />
        </div>
        <div className="row pt-2">
          <strong>FileField</strong>
          <Link
            field={{
              value: {
                href: (props.fields.FileField.value as { src: string }).src,
                text: `${(props.fields.FileField.value as { displayName: string }).displayName}.${(
                  props.fields.FileField.value as { extension: string }
                ).extension.toLowerCase()}`,
              },
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
