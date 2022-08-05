import { SWRConfig } from 'swr';
import type { AppProps } from "next/app";
import 'antd/dist/antd.css';
import instance from '@/api/instance';
import '../styles/globals.css'
import { AppPropsWithLayout } from "../models/layouts";
import Layout from "../components/Layouts";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}

export default MyApp;
