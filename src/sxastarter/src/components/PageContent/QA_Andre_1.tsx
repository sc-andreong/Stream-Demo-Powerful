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
      <div className="subtitle">
        <Text> Line: ${props.params?.LineText}</Text>
      </div>
      <p className="subtitle">
        <Text> MultiLine: ${props.params?.MultiLineText}</Text>
      </p>
      <p className="subtitle">
        <Text> DropLink: ${props.params?.Droplink}</Text>
      </p>
      <p className="subtitle">
        <Text> DropList: ${props.params?.Droplist}</Text>
      </p>
      <p className="subtitle">
        <Text> Integer: ${props.params?.Integer}</Text>
      </p>
      <p className="subtitle">
        <Text> Number: ${props.params?.Number}</Text>
      </p>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
