import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/forum/',
    component: ComponentCreator('/forum/', 'a07'),
    exact: true
  },
  {
    path: '/helloMarkdown',
    component: ComponentCreator('/helloMarkdown', '966'),
    exact: true
  },
  {
    path: '/helloReact',
    component: ComponentCreator('/helloReact', '77a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dee'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '97c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9d9'),
            routes: [
              {
                path: '/docs/category/chat-with-erob',
                component: ComponentCreator('/docs/category/chat-with-erob', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/erob-developer',
                component: ComponentCreator('/docs/category/erob-developer', 'c11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/erob-drivers',
                component: ComponentCreator('/docs/category/erob-drivers', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/CAN-Linux',
                component: ComponentCreator('/docs/eRob driver/CAN-Linux', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/CANopen-Linux',
                component: ComponentCreator('/docs/eRob driver/CANopen-Linux', 'f2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/Hardware',
                component: ComponentCreator('/docs/eRob driver/Hardware', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/IGH EtherCAT',
                component: ComponentCreator('/docs/eRob driver/IGH EtherCAT', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/python-driver',
                component: ComponentCreator('/docs/eRob driver/python-driver', '474'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/SOEM EtherCAT',
                component: ComponentCreator('/docs/eRob driver/SOEM EtherCAT', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/SOEM EtherCAT Linux',
                component: ComponentCreator('/docs/eRob driver/SOEM EtherCAT Linux', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob driver/TwinCAT3',
                component: ComponentCreator('/docs/eRob driver/TwinCAT3', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob_developer/LLM-python-TwinCAT',
                component: ComponentCreator('/docs/eRob_developer/LLM-python-TwinCAT', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob_developer/Nvidia-Isaac-sim',
                component: ComponentCreator('/docs/eRob_developer/Nvidia-Isaac-sim', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eRob_developer/ROS2-moveIt',
                component: ComponentCreator('/docs/eRob_developer/ROS2-moveIt', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/Chat-with-eRob',
                component: ComponentCreator('/docs/tutorial-extras/Chat-with-eRob', 'c72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/Chat-with-eRobo3',
                component: ComponentCreator('/docs/tutorial-extras/Chat-with-eRobo3', '1d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
