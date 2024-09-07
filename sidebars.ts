import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Unidad 1: Introducción',
            items: [
                'unit-1/introduction',
                'unit-1/Kotlin',
                'unit-1/basics',
                'unit-1/void-safety',
                'unit-1/input',
                'unit-1/clean'
            ],
        },
        {
            type: 'category',
            label: 'Unidad 2: Programación Orientada a Objetos',
            link: {
                type: 'doc',
                id: 'unit-2/index',
            },
            items: [
                'unit-2/objects',
                'unit-2/classes',
                'unit-2/lateinit',
                'unit-2/visibility',
                'unit-2/inheritance',
                'unit-2/constructors',
                'unit-2/interfaces',
                'unit-2/abstract-classes',
                'unit-2/open-closed',
                'unit-2/operator-overload',
                'unit-2/properties',
                'unit-2/extension',
                'unit-2/infix',
                'unit-2/data-classes',
                'unit-2/companion',
                'unit-2/enums',
                'unit-2/sealed',
                'unit-2/inheritance-2',
            ],
        },
    ],
    assignmentsSidebar: [
        {
            type: 'category',
            label: 'Tareas',
            items: [
                'assignments/rules',
                'assignments/assignment-1',
                'assignments/assignment-2',
            ],
        }
    ]
};

export default sidebars;
