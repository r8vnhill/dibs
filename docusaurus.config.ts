import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
    title: 'DIBS',
    tagline: 'Diseño e Implementación de Bibliotecas de Software',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://dibs.pages.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ravenhill', // Usually your GitHub org/user name.
    projectName: 'dibs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'DIBS',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Apuntes',
                },
                {
                    to: '/docs/lessons',
                    label: 'Clases',
                    position: 'left',
                },
                {
                    to: '/docs/syllabus',
                    label: 'Temario',
                    position: 'left',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'assignmentsSidebar',
                    label: 'Tareas',
                    position: 'left',
                },
                {
                    href: 'https://github.com/r8vnhill/dibs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Ignacio Slater M. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.nightOwlLight,
            darkTheme: prismThemes.nightOwl,
            additionalLanguages: [
                'java',
                'scala',
                'csharp',
                'haskell',
                "bash",
                "powershell",
                "toml",
                "properties",
                "ruby",
                'groovy',
                "scheme",
                "erlang",
                "elixir"
            ],
        },
    } satisfies Preset.ThemeConfig,
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    plugins: [
        require.resolve('docusaurus-lunr-search'),
    ],
};

// noinspection JSUnusedGlobalSymbols
export default config;
