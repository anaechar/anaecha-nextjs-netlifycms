export function netlifyCMSConfig(repo, base_url, cloudName, apiKey) {
    return {
        backend: {
            name: 'github',
            repo,
            branch: 'main',
            base_url,
            auth_endpoint: 'api/auth'
        },
        media_library: {
            name: 'cloudinary',
            config: {
                cloud_name: cloudName,
                api_key: apiKey
            } 
        },
        collections: [
            {
                label: 'Posts',
                name: 'posts',
                folder: 'contents/posts',
                extension: 'mdx',
                format: 'frontmatter',
                create: true,
                editor: {preview: false},
                sortable_fields: ['timestamp'],
                view_filters: [
                    {label: 'Drafts', field: 'draft', pattern: true},
                    {label: '#Coding', field: 'category', pattern: 'Coding'},
                    {label: 'Robots', field: 'robots', pattern: false},
                ],
                view_groups: [
                    {label: 'Month-Year:', field: 'publishedDate', pattern: '\\w{3}.\\d{4}'}
                ],
                slug: '{{fields.slug}}',
                fields: [
                    {label: 'Draft', name: 'draft', widget: 'boolean', default: false, required: false},
                    {label: 'Published Date', name: 'publishedDate', widget: 'date', format: 'D MMM YYYY', required: true},
                    {label: 'Title', name: 'title', widget: 'string', required: true},
                    {label: 'Slug', name: 'slug', widget: 'string', required: true},
                    {label: 'Category', name: 'category', widget: 'relation', collection: 'settings', file: 'categories', search_fields: ['categories.*.name'], display_fields: ['categories.*.name'], value_field: 'categories.*.name', multiple: true, required: true},
                    {label: 'Description', name: 'description', widget: 'string', default: '', required: false},
                    {label: 'Body', name: 'body', widget: 'markdown', default: '', required: true},
                    {label: 'Timestamp', name: 'timestamp', widget: 'datetime', format: 'X', required: true},
                    {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false}
                ]
            },
            {
                label: 'Pages',
                name: 'pages',
                folder: 'contents/pages',
                extension: 'mdx',
                format: 'frontmatter',
                create: true,
                editor: {preview: false},
                sortable_fields: ['timestamp'],
                view_filters: [
                    {label: 'Drafts', field: 'draft', pattern: true},
                    {label: 'Nav', field: 'nav', pattern: true},
                    {label: 'Robots', field: 'robots', pattern: false}
                ],
                view_groups: [
                    {label: 'Month-Year:', field: 'publishedDate', pattern: '\\w{3}.\\d{4}'}
                ],
                slug: '{{fields.slug}}',
                fields: [
                    {label: 'Draft', name: 'draft', widget: 'boolean', default: false, required: false},
                    {label: 'Published Date', name: 'publishedDate', widget: 'date', format: 'D MMM YYYY',required: true},
                    {label: 'Title', name: 'title', widget: 'string', required: true},
                    {label: 'Slug', name: 'slug', widget: 'string', required: true},
                    {label: 'Description', name: 'description', widget: 'string', default: '', required: false},
                    {label: 'Body', name: 'body', widget: 'markdown', default: '', required: false},
                    {label: 'Nav', name: 'nav', widget: 'boolean', default: false, required: false},
                    {label: 'Timestamp', name: 'timestamp', widget: 'datetime', format: 'X', required: true},
                    {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false}
                ]
            },
            {
                label: 'Projects',
                name: 'projects',
                folder: 'contents/projects',
                extension: 'mdx',
                format: 'frontmatter',
                create: true,
                editor: {preview: false},
                sortable_fields: ['timestamp'],
                view_filters: [
                    {label: 'Drafts', field: 'draft', pattern: true},
                    {label: 'Show', field: 'show', pattern: true},
                    {label: 'Robots', field: 'robots', pattern: false}
                ],
                view_groups: [
                    {label: 'Month-Year:', field: 'publishedDate', pattern: '\\w{3}.\\d{4}'}
                ],
                slug: '{{fields.slug}}',
                fields: [
                    {label: 'Draft', name: 'draft', widget: 'boolean', default: false, required: false},
                    {label: 'Published Date', name: 'publishedDate', widget: 'date', format: 'D MMM YYYY',required: true},
                    {label: 'Title', name: 'title', widget: 'string', required: true},
                    {label: 'Slug', name: 'slug', widget: 'string', required: true},
                    {label: 'Category', name: 'category', widget: 'relation', collection: 'settings', file: 'categories', search_fields: ['categories.*.name'], display_fields: ['categories.*.name'], value_field: 'categories.*.name', multiple: true, required: true},
                    {label: 'Status', name: 'status', widget: 'relation', collection: 'settings', file: 'status', search_fields: ['status.*.name'], display_fields: ['status.*.name'], value_field: 'status.*.name', multiple: false, required: true},
                    {label: 'Description', name: 'description', widget: 'string', default: '', required: false},
                    {label: 'Body', name: 'body', widget: 'markdown', default: '', required: false},
                    {label: 'Show', name: 'show', widget: 'boolean', default: true, required: false},
                    {label: 'Timestamp', name: 'timestamp', widget: 'datetime', format: 'X', required: true},
                    {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false}
                ]
            },
            {
                label: 'Settings',
                name: 'settings',
                files: [
                    {
                        label: 'Categories',
                        name: 'categories',
                        create: true,
                        editor: {preview: false},
                        sortable_fields: ['name'],
                        file: 'contents/categories.json',
                        fields: [
                            {
                                label: 'Categories',
                                name: 'categories',
                                widget: 'list',
                                fields: [
                                    {label: 'Name', name: 'name', widget: 'string', required: true},
                                    {label: 'Slug', name: 'slug', widget: 'string', required: true}
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Status',
                        name: 'status',
                        create: true,
                        editor: {preview: false},
                        sortable_fields: ['name'],
                        file: 'contents/status.json',
                        fields: [
                            {
                                label: 'Status',
                                name: 'status',
                                widget: 'list',
                                fields: [
                                    {label: 'Name', name: 'name', widget: 'string', required: true},
                                    {label: 'Slug', name: 'slug', widget: 'string', required: true}
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Meta',
                        name: 'meta',
                        create: false,
                        editor: {preview: false},
                        file: 'contents/meta.json',
                        fields: [
                            {label: 'Title', name: 'title', widget: 'string', required: true},
                            {label: 'Description', name: 'description', widget: 'string', required: true},
                            {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false},
                        ]
                    },
                    {
                        label: 'Hero',
                        name: 'hero',
                        create: false,
                        editor: {preview: false},
                        file: 'contents/hero.json',
                        fields: [
                            {label: 'Display', name: 'display', widget: 'boolean', default: true, required: false},
                            {label: 'Header', name: 'header', widget: 'string', required: true},
                            {label: 'Content', name: 'content', widget: 'string', required: true}
                        ]
                    }
                ]
            }
        ]
    };
};