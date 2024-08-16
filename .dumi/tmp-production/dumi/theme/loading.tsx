// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import nprogress from '/Users/shilei/code/x-render/node_modules/nprogress';
import './nprogress.css';
import UserLoading from '/Users/shilei/code/x-render/.dumi/loading.tsx';
import React, { useLayoutEffect, type FC } from 'react';
import { useSiteData } from 'dumi';

const DumiLoading: FC = () => {
  const { setLoading } = useSiteData();

  useLayoutEffect(() => {
    setLoading(true);
    nprogress.start();

    return () => {
      setLoading(false);
      nprogress.done();
    }
  }, []);

  return <UserLoading />
}

export default DumiLoading;
