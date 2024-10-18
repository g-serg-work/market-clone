import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            // options: {
            //     icon: true,
            //     svgoConfig: {
            //         plugins: [
            //             {
            //                 name: 'convertColors',
            //                 params: {
            //                     // currentColor: true,
            //                 }
            //             }
            //         ]
            //     }
            // }
        }],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const cssLoader = buildCssLoader(isDev);

    // Если не используем typescript - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const mediaTest = /\.(png|jpe?g|gif|woff2|woff|webp)$/i;

    const fileLoader : webpack.RuleSetRule = {
        test: mediaTest,
        exclude: /public/,
        use: [
            {
                loader: 'file-loader',
            },
        ]
    };

    const rawLoader : webpack.RuleSetRule = {
        test: mediaTest,
        include: /public/,
        type: 'asset/resource',
    };

    return [
        fileLoader,
        rawLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
