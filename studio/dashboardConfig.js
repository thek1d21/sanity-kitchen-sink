export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600067209ab64c012b7fde35',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hjiub4j2',
                  apiId: '943302a3-62f9-404c-b897-a85ce62e9d3b'
                },
                {
                  buildHookId: '60006720ed13d4011eee7aa0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yyxmcohb',
                  apiId: '3b0c8fe2-438c-447c-b335-880c6c0404ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thek1d21/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yyxmcohb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
