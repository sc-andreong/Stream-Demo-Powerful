import { Field } from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (): JSX.Element => {
  return (
    <div className="component rich-text">
      <div className="component-content">text</div>
    </div>
  );
};
