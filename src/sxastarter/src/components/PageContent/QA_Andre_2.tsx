import React from 'react';
import { Field, RichText, RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SingleLine1: Field<string>;
  SingleLine2: Field<string>;
  MultiLine1: Field<string>;
  MultiLine2: Field<string>;
  RichText1: RichTextField;
  RichText2: RichTextField;
  Integer1: Field<string>;
  Integer2: Field<string>;
  Number1: Field<string>;
  Number2: Field<string>;
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<{ label: string }>;
  DropLink2: Field<{ label: string }>;
  DropTree1: Field<{ label: string }>;
  DropTree2: Field<{ label: string }>;
  MultiList1: Field<unknown>;
  MultiList2: Field<unknown>;
  MultiListSearch1: Field<unknown>;
  MultiListSearch2: Field<unknown>;
  TreeList1: Field<unknown>;
  TreeList2: Field<unknown>;
  MultiRootTreeList1: Field<unknown>;
  MultiRootTreeList2: Field<unknown>;
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
      <div className="container">
        <p className="title">
          <strong>Single Line</strong>
        </p>
        <div className="subtitle">
          <Text field={props.fields?.SingleLine1} />
        </div>
        <p className="subtitle">
          <Text field={props.fields?.SingleLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi Line</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Rich Text</strong>
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText1} />
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Integer</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Number</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop List</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Link</strong>
        </p>
        <p className="subtitle">{props.fields.DropLink1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink1.value)}</p>
        <p className="subtitle">{props.fields.DropLink2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Tree</strong>
        </p>
        <p className="subtitle">{props.fields.DropTree1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree1.value)}</p>
        <p className="subtitle">{props.fields.DropTree2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList1.value)
            ? props.fields.MultiList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList2.value)
            ? props.fields.MultiList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List Search</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch1.value)
            ? props.fields.MultiListSearch1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch2.value)
            ? props.fields.MultiListSearch2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList1.value)
            ? props.fields.TreeList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList2.value)
            ? props.fields.TreeList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multiroot Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList1.value)
            ? props.fields.MultiRootTreeList1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList2.value)
            ? props.fields.MultiRootTreeList2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList2.value)}</p>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
