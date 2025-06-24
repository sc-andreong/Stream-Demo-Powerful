import { JSX } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  DesignLibrary,
  ComponentPropsContext,
  SitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import NotFound from 'src/NotFound';
import { componentBuilder } from 'temp/componentBuilder';
import config from 'temp/config';
import { ParallaxProvider } from 'react-scroll-parallax';

const FEAASRender = ({
  notFound,
  componentProps,
  layoutData,
  headLinks,
}: SitecorePageProps): JSX.Element => {
  if (notFound) {
    return <NotFound sourceIdx={3} debugData={`is notFound: ${notFound}`} />;
  }
  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory()}
        layoutData={layoutData}
      >
        <Head>
          <title>Sitecore Component Library</title>
          <link rel="icon" href={`${config.publicUrl}/favicon.ico`} />
          {headLinks.map((headLink) => (
            <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
          ))}
        </Head>
        <ParallaxProvider>
          <DesignLibrary {...layoutData} />
        </ParallaxProvider>
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      feaasSrc: context.query.feaasSrc || null,
    },
    // Don't show the page if it's not requested by the api route using the preview mode
    notFound: !context.preview,
  };
};

export default FEAASRender;
