import * as Sentry from "@sentry/node";
import { NextPageContext } from "next";
import Error, { ErrorProps as NextErrorProps } from "next/error";
import React from "react";

const NRNError = (props: NRNErrorProps): JSX.Element => {
  const { statusCode, isSSRReadyToRender, err, children = null } = props;

  if (!isSSRReadyToRender && err) {
    Sentry.captureException(err);
  }

  return <>{children || <Error statusCode={statusCode} />}</>;
};

NRNError.getInitialProps = async (
  props: NextPageContext,
): Promise<ErrorProps> => {
  const { res, err, asPath } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const errorInitialProps: ErrorProps = await Error.getInitialProps({
    res,
    err,
  });
  errorInitialProps.isSSRReadyToRender = true;
  if (res?.statusCode === 404) {
    // Opinionated: do not record an exception in Sentry for 404
    return { statusCode: 404, isSSRReadyToRender: true };
  }
  if (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
    return errorInitialProps;
  }

  Sentry.captureException(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
  );
  await Sentry.flush(2000);
  return errorInitialProps;
};

export declare type NRNErrorProps = {
  err: Error;
  statusCode: number;
  isSSRReadyToRender: boolean;
  children?: React.ReactElement;
};

export declare type ErrorProps = {
  isSSRReadyToRender: boolean;
} & NextErrorProps;

export default NRNError;
