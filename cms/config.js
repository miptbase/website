module.exports = {

    // We want to manually init the config file
    cms_manual_init: true,

    // Backend configuration, in this case with git
    backend: {
        name: "git-gateway",
        branch: "develop",
        squash_merges: true,
    },

    // Local backend is used during development
    local_backend: true,

    // Where to store the images
    media_folder: "public/media/",

    // Where to link the images
    public_folder: "media/",

    // The Pages collection
    collections: [
        {
            name: "pages",
            label: "Pages",
            files: [
                {
                    label: "Home",
                    name: "Home",
                    file: "content/home.json",
                    fields: [
                        {
                            label: "Top",
                            name: "top",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Content", name: "content", widget: "string" },
                                { label: "ButtonText", name: "button", widget: "string"},
                                { label: "Image", name: "img", widget: "image"},
                            ]
                        },
                        {
                            label: 'Features',
                            name: "features",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string"},
                                {
                                    label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields: [
                                        { label: "Name", name: "name", widget: "string"},
                                        { label: "Description", name: "description", widget: "markdown"},
                                        { label: "Image", name: "img", widget: "image"}
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Goal",
                            name: "goal",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                { label: "Text", name: "text", widget: "text" },
                                { label: "Caption", name: "caption", widget: "string" },
                                { label: "ButtonText", name: "button", widget: "string" },
                                { label: "Image", name: "img", widget: "image" }
                            ]
                        },
                        {
                            label: 'Donors',
                            name: "donors",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Title", name: "title", widget: "string" },
                                            { label: "Text", name: "text", widget: "text" }
                                        ]
                                }
                            ]
                        },
                        {
                            label: 'Media',
                            name: "media",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                {
                                    label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Text", name: "text", widget: "text" },
                                            { label: "Image", name: "img", widget: "image" },
                                            { label: "Date", name: "date", widget: "text" },
                                        ]

                                }
                            ]
                        },
                        {
                            label: 'Donation',
                            name: "donation",
                            widget: "object",
                            fields: [
                                {label: "Title", name: "title", widget: "string"},
                                {label: "Text", name: "text", widget: "text"},
                                {label: "Image", name: "img", widget: "image" },
                                {
                                    label: 'Form',
                                    name: 'form',
                                    widget: "object",
                                    fields: [
                                        {
                                            label: "Placeholders",
                                            name: "placeholders",
                                            widget: "object",
                                            fields: [
                                                {label: "Name", name: "name", widget: "string"},
                                                {label: "Email", name: "email", widget: "string"},
                                            ]
                                        },
                                        {
                                            label: "Check",
                                            name: "check",
                                            widget: "string"
                                        },
                                        {
                                            label: 'Metods',
                                            name: "metods",
                                            widget: "list",
                                            fields: [
                                                {
                                                    label: "Type",
                                                    name: "type",
                                                    widget: "string"
                                                }
                                            ]
                                        },
                                        {
                                            label: 'Summ',
                                            name: "summ",
                                            widget: "list",
                                            fields: [
                                                {
                                                    label: "Button",
                                                    name: "button",
                                                    widget: "number"
                                                }
                                            ]
                                        },
                                        {
                                            label: 'Other',
                                            name: "other",
                                            widget: "string"
                                        },
                                        {
                                            label: 'Button',
                                            name: "button",
                                            widget: "string"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Privacy',
                            name: "privacy",
                            widget: "text"
                        }
                    ]
                }
            ],
        },
        {
            name: "common",
            label: "Common",
            files: [
                {
                    label: "Header",
                    name: "header",
                    file: "content/header.json",
                    fields: [
                        {
                            label: "Header",
                            name: "header",
                            widget: "object",
                            fields: [
                                { label: "Logo", name: "logo", widget: "image"},
                                { label: "Button", name: "button", widget: "string"},
                            ]
                        }
                    ]
                },
                {
                    label: "Footer",
                    name: "footer",
                    file: "content/footer.json",
                    fields: [
                        {
                            label: "Footer",
                            name: "footer",
                            widget: "object",
                            fields: [
                                { label: "Logo", name: "logo", widget: "image"},
                                {
                                    label: 'Social',
                                    name: "social",
                                    widget: "list",
                                    fields: [
                                        { label: "Name", name: "name", widget: "string"},
                                        { label: "Link", name: "link", widget: "string"},
                                        { label: "Image", name: "img", widget: "image"}
                                    ]
                                },
                                {
                                    label: 'Copy',
                                    name: "copy",
                                    widget: "object",
                                    fields: [
                                        { label: "Text", name: "text", widget: "markdown"},
                                        { label: "Copy", name: "copy", widget: "markdown"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Menu",
                    name: "menu",
                    file: "content/menu.json",
                    fields: [
                        {
                            label: "Menu",
                            name: "menu",
                            widget: "object",
                            fields: [
                                {
                                    label: "Items",
                                    name: "items",
                                    widget: "list",
                                    fields: [
                                        { label: "Item", name: "item", widget: "string"},
                                        { label: "Link", name: "link", widget: "string"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Feedback',
                    name: "feedback",
                    file: "content/feedback.json",
                    fields: [
                        {
                            label: 'Feedback',
                            name: "feedback",
                            widget: "object",
                            fields: [
                                { label: "Text", name: "text", widget: "text"},
                                { label: "Placeholder", name: "placeholder", widget: "string"},
                                { label: "Button", name: "button", widget: "string"},
                            ]
                        }
                    ]
                }
            ],
        },
        {
            name: "InnerPages",
            label: "InnerPage",
            editor: { preview: false },
            label_singular: "Page",
            folder: "content/inner",
            create: true,
            slug: "{{slug}}",
            extension: "md",
            fields: [
                {
                    label: "Title",
                    name: "title",
                    widget: "string",
                    required: true,
                },
                {
                    label: "SEOSection",
                    name: "seo",
                    widget: "object",
                    fields: [
                        {
                            label: "SEOTitle",
                            name: "title",
                            widget: "string",
                        },
                        {
                            label: "SEODescription",
                            name: "description",
                            widget: "string",
                        },
                    ],
                },
                {
                    label: "Content",
                    name: "content",
                    widget: "markdown",
                    required: true
                },
            ],
        },
    ],
};