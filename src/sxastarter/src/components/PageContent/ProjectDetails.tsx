import React, { useEffect, useState, JSX } from 'react';
import {
  Field,
  ImageField,
  Placeholder,
  Text,
  Image,
  RichText,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { useI18n } from 'next-localization';

interface Fields {
  Title: Field<string>;
  Abstract: Field<string>;
  Category: Field<string>;
  Client: ImageField;
  Problem: RichTextField;
  Solution: RichTextField;
  Thumbnail: ImageField;
}

export type ProjectDetailsProps = ComponentProps & {
  fields: Fields;
};

export const Default = (props: ProjectDetailsProps): JSX.Element => {
  const [currentUrl, setCurrentUrl] = useState('');
  const id = props.params?.RenderingIdentifier;
  const { t } = useI18n();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div
      className={`component project-details mt-4 mb-5 ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container container-wide">
        <div className="row gx-5">
          <div className="col-12 col-lg-6">
            <h1 className="display-1 fw-bold">
              <Text field={props.fields?.Title} />
            </h1>
            <p className="mb-0">
              <Text field={props.fields?.Abstract} />
            </p>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-end justify-content-end gap-3 mt-3">
            <div>
              <span className="eyebrow-accent me-2">{t('Client') || 'Client'}:</span>
              <Image field={props.fields.Client} className="client-logo" />
            </div>
            <div>
              <span className="eyebrow-accent me-2">{t('Category') || 'Category'}:</span>
              <Text field={props.fields.Category} />
            </div>
          </div>
        </div>
      </div>

      <div className="container container-widest-fluid">
        <Image field={props.fields.Thumbnail} className="project-img img-fluid" />
      </div>
      <div className="container">
        <div className="article-content">
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="article-content-body rich-text mb-5">
                <RichText field={props.fields.Problem} />
              </div>
            </div>
            <div className="row">
              <Placeholder name="project-additional-content" rendering={props.rendering} />
            </div>
            <div className="col-12 col-lg-6 mx-auto">
              <div className="article-content-body rich-text my-5">
                <RichText field={props.fields.Solution} />
              </div>
            </div>
            <div className="col-12 d-flex gap-2 align-items-center justify-content-end mb-5">
              <h6 className="eyebrow-accent mb-0 me-2">{t('Share on') || 'Share on'}</h6>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon round size={48} bgStyle={{ fill: 'var(--bg-accent)' }} />
              </FacebookShareButton>
              <TwitterShareButton url={currentUrl}>
                <TwitterIcon round size={48} bgStyle={{ fill: 'var(--bg-accent)' }} />
              </TwitterShareButton>
              <LinkedinShareButton url={currentUrl}>
                <LinkedinIcon round size={48} bgStyle={{ fill: 'var(--bg-accent)' }} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
