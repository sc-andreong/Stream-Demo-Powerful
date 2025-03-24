import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Value0: Field<string>;
  Value1: Field<string>;
  Value2: Field<string>;
  Value3: Field<string>;
  Value4: Field<string>;
  Value5: Field<string>;
  Value6: Field<string>;
  Value7: Field<string>;
  Value8: Field<string>;
  Value9: Field<string>;
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
        <Text field={props.fields?.Value0} />
      </div>
      <p className="subtitle">
        <Text field={props.fields?.Value1} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value2} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value3} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value4} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value5} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value6} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value7} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value8} />
      </p>
      <p className="subtitle">
        <Text field={props.fields?.Value9} />
      </p>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
