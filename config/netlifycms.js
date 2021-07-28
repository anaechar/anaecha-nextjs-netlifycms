export default {
    backend: {
        name: 'github',
        repo: 'anaechar/anaecha-nextjs-netlifycms',
        branch: 'main',
        base_url: 'https://anaecha.com',
        auth_endpoint: 'api/auth'
    },
    media_library: {
        name: 'cloudinary',
        config: {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY
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
            sortable_fields: ['timestamp'],
            view_filters: [
                {label: 'Drafts', field: 'draft', pattern: true},
                {label: '#Coding', field: 'category', pattern: 'Coding'},
                {label: 'Robots', field: 'robots', pattern: false},
            ],
            view_groups: [
                {label: 'Month-Year:', field: 'publishedDate', pattern: '\d{4}'}
            ],
            slug: '{{fields.slug}}',
            fields: [
                {label: 'Draft', name: 'draft', widget: 'boolean', default: false, required: false},
                {label: 'Published Date', name: 'publishedDate', widget: 'date', format: 'D MMM YYYY', required: true},
                {label: 'Title', name: 'title', widget: 'string', required: true},
                {label: 'Slug', name: 'slug', widget: 'string', required: true},
                {label: 'Category', name: 'category', widget: 'relation', collection: 'settings', file: 'categories', search_fields: ['categories.*.name'], display_fields: ['categories.*.name'], value_field: 'categories.*.name', multiple: true, required: true},
                {label: 'Tags', name: 'tags', widget: 'string', default: '', required: false},
                {label: 'Description', name: 'description', widget: 'string', default: '', required: false},
                {label: 'Body', name: 'body', widget: 'markdown', default: '', required: true},
                {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false},
                {label: 'Timestamp', name: 'timestamp', widget: 'datetime', format: 'X', required: true}
            ]
        },
        {
            label: 'Pages',
            name: 'pages',
            folder: 'contents/pages',
            extension: 'mdx',
            format: 'frontmatter',
            create: true,
            sortable_fields: ['timestamp'],
            view_filters: [
                {label: 'Drafts', field: 'draft', pattern: true},
                {label: 'Nav', field: 'nav', pattern: true},
                {label: 'Robots', field: 'robots', pattern: false}
            ],
            view_groups: [
                {label: 'Month-Year:', field: 'publishedDate', pattern: '/\w{3}.\d{4}/g'}
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
                {label: 'Robots', name: 'robots', widget: 'boolean', default: true, required: false},
                {label: 'Timestamp', name: 'timestamp', widget: 'datetime', format: 'X', required: true}
            ]
        },
        {
            label: 'Settings',
            name: 'settings',
            files: [
                {
                    label: 'Categories',
                    name: 'categories',
                    editor: {preview: false},
                    file: 'contents/posts-settings/categories.json',
                    fields: [
                        {
                            label: 'Categories',
                            name: 'categories',
                            widget: 'list',
                            fields: [
                                {label: 'Name', name: 'name', widget: 'string'}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};