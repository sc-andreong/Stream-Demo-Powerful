import {
  Field,
  ImageField,
  NextImage as JssImage,
  Link as JssLink,
  LinkField,
  Text,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

interface Fields {
  Image: ImageField & { metadata?: { [key: string]: unknown } };
  ImageCaption: Field<string>;
  TargetUrl: LinkField;
}

type NewComponentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const NewComponentDefault = (props: NewComponentProps): JSX.Element => (
  <div className={`component image ${props.params.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Image</span>
    </div>
  </div>
);

export const Default = (props: NewComponentProps): JSX.Element => {
  const { pageContext } = useSitecore();

  if (props.fields) {
    const Image = () => <JssImage field={props.fields.Image} />;
    const id = props.params.RenderingIdentifier;

    return (
      <div className={`component image ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          {pageContext.pageState === 'edit' || !props.fields.TargetUrl?.value?.href ? (
            <Image />
          ) : (
            <JssLink field={props.fields.TargetUrl}>
              <Image />
            </JssLink>
          )}
          <Text
            tag="span"
            className="image-caption field-imagecaption"
            field={props.fields.ImageCaption}
          />
        </div>
      </div>
    );
  }

  return <NewComponentDefault {...props} />;
};
