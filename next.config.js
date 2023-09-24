
const TISTORY_API_KEY = process.env.NEXT_PUBLIC_TISTORY_API_KEY;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    experimental: {},
    typescript: {
        // TODO : Next 에서 Async Server Component 버그가 수정되면 제거
        // 참조 : https://nextjs.org/docs/app/building-your-application/configuring/typescript#async-server-component-typescript-error
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;