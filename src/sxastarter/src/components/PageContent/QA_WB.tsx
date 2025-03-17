import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">QA_WB</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component QA_WB ${props.params.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div className="component-content">{text}</div>
    </div>
  );
};

export const QaVariant = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">QA_WB</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component QA_WB ${props.params.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div>This is QA_Variant</div>
      <div className="component-content">{text}</div>
    </div>
  );
};
