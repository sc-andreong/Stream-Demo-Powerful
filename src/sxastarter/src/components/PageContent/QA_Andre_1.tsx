import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Name: Field<string>;
  Rating: Field<string>;
  Content: Field<string>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Comparison</span>
    </div>
  </div>
);

export const Default = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return props.fields ? (
    <div
      className={`component qa-andre-1 ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <p className="subtitle">Line: {props.params?.LineText}</p>
      <p className="subtitle">MultiLine: {props.params?.MultiLineText}</p>
      <p className="subtitle">DropLink: {props.params?.Droplink}</p>
      <p className="subtitle">DropList: {props.params?.Droplist}</p>
      <p className="subtitle">Integer: {props.params?.Integer}</p>
      <p className="subtitle">Number: {props.params?.Number}</p>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
