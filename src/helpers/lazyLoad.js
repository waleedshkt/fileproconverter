import React, { lazy, Suspense } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner = ({ isComponent, restProps }) => (
    <div style={{ position: 'relative', height: `100${isComponent ? '%' : 'vh'}`, width: `100${isComponent ? '%' : 'vw'}` }} {...restProps}>
        <Spin 
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} 
            indicator={<LoadingOutlined spin style={{ fontSize: '48px', color: '#7e56d9' }} />}
        />
    </div>
);

const load = (Component, isComponent) => props => (
    <Suspense fallback={<Spinner isComponent={isComponent} />}>
        <Component {...props} />
    </Suspense>
);

const lazyLoad = (componentName, isPage = false) => load(lazy(() => import(`../${isPage ? 'pages' : 'components'}/${componentName}`)), !isPage);

export default lazyLoad;