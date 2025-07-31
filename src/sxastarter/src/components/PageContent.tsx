import { RichText, RichTextField, useSitecore } from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

interface Fields {
  Content: RichTextField;
}

type PageContentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ComponentContentProps = {
  id: string;
  styles: string;
  children: JSX.Element;
};

const ComponentContent = (props: ComponentContentProps) => {
  const id = props.id;
  return (
    <div className={`component content ${props.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="field-content">{props.children}</div>
      </div>
    </div>
  );
};

export const Default = (props: PageContentProps): JSX.Element => {
  const { page } = useSitecore();
  const id = props.params.RenderingIdentifier;

  if (!(props.fields && props.fields.Content) && !page.layout?.sitecore?.route?.fields?.Content) {
    return (
      <div className={`component content ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-content">[Content]</div>
        </div>
      </div>
    );
  }

  const field = (
    props.fields && props.fields.Content
      ? props.fields.Content
      : page.layout?.sitecore?.route?.fields?.Content
  ) as RichTextField;

  return (
    <ComponentContent styles={props.params.styles} id={id}>
      <RichText field={field} />
    </ComponentContent>
  );
};
