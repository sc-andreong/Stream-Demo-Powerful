import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

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
      <div className="title">
        <Text field={props.fields?.Title} />
      </div>
      <p className="subtitle">
        <Text field={props.fields?.Name} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Rating} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Content} />
      </p>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
