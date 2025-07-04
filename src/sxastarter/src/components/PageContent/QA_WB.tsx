import React, { JSX } from 'react';
import { Field, Image, ImageField, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  File: Field<unknown>;
  Image: ImageField;
}

export type DemoComponentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: DemoComponentProps): JSX.Element => (
  <div className={`component ${props.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">QA WB Default</span>
    </div>
  </div>
);

export const Default = (props: DemoComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  console.log('DemoComponent', props.fields);

  return props.fields ? (
    <div className={`component QA_WB ${props.params?.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div className="container">
        <h1 className="row pt-2">
          Title: <Text field={props.fields.Title} />
        </h1>
        <div className="pt-2">
          <strong>Image</strong>
          <div>
            <Image field={props.fields.Image} />
          </div>
        </div>
        <div className="pt-2">
          <strong>FileField</strong> -{' '}
          <Link
            field={{
              value: {
                href: (props.fields.File.value as { src: string }).src,
                text: `${(props.fields.File.value as { displayName: string }).displayName}.${(
                  props.fields.File.value as { extension: string }
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
