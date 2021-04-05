import Head from 'next/head';
import { siteName } from '../config';

export default function SEO({ pageTitle, pagination }) {
  return (
    <Head>
      {pageTitle === 'pagination' ? (
        <title>
          {siteName} - Page {pagination.page} of {pagination.pageCount}
        </title>
      ) : (
        <title>
          {pageTitle} | {siteName}
        </title>
      )}
    </Head>
  );
}
