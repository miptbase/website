module.exports = {

    // We want to manually init the config file
    cms_manual_init: true,

    // Backend configuration, in this case with git
    backend: {
        name: "github",
        repo: "miptbase/website",
        branch: "develop",
        squash_merges: true,
        base_url: 'https://dev.miptbase.org',
        auth_endpoint: '/api/auth',
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
                            label: "SeoMain",
                            name: "seoMain",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Description", name: "description", widget: "string"},
                            ]
                        },
                        {
                            label: "Top",
                            name: "top",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Content", name: "content", widget: "string" },
                                { label: "ButtonText", name: "button", widget: "string"},
                                { label: "ButtonMobileText", name: "buttonMobile", widget: "string"},
                                { label: "Image", name: "img", widget: "image"},
                                { label: "MobileImg", name: "mobileImg", widget: "image"},
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
                                { label: "ButtonMobileText", name: "buttonMobile", widget: "string" },
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
                                            { label: "Name", name: "name", widget: "stroke" },
                                            { label: "Text", name: "text", widget: "text" },
                                            { label: "Image", name: "img", widget: "image" },
                                            { label: "MobileImage", name: "mobileImg", widget: "image" },
                                            { label: "Date", name: "date", widget: "text" },
                                            { label: "Link", name: "link", widget: "stroke" },
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
                                {label: "MobileImage", name: "mobileImg", widget: "image" },
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
                                                    widget: "markdown"
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
                        }
                    ]
                },
                {
                    label: "Success",
                    name: "Success",
                    file: "content/success.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "Content",
                            name: "content",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "string" },
                            ]
                        },
                        {
                            label: 'Image',
                            name: "image",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Logo", name: "logo", widget: "image" },
                                { label: "Image", name: "img", widget: "image" },

                            ]
                        },

                        {
                            label: 'Share',
                            name: "share",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "name" },
                                            { label: "Image", name: "img", widget: "image" },
                                            { label: "Link", name: "link", widget: "string" },
                                        ]
                                }
                            ]
                        },
                    ]
                },
                {
                    label: "Error",
                    name: "Error",
                    file: "content/error.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "Content",
                            name: "content",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "markdown" },
                                { label: "ButtonPayText", name: "buttonPayText", widget: "string" },
                                { label: "ButtonSupportText", name: "buttonSupportText", widget: "string" },
                            ]
                        },
                        {
                            label: 'Image',
                            name: "image",
                            widget: "object",
                            fields: [
                                { label: "Image", name: "img", widget: "image" },

                            ]
                        },
                    ]
                },
                {
                    label: "Standard",
                    name: "Standard",
                    file: "content/standard.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "Standard",
                            name: "standard",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Text", name: "text", widget: "text" },
                                        ]
                                }
                            ]
                        },
                        {
                            label: "CompositionStandard",
                            name: "compositionStandard",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Title", name: "title", widget: "string" },
                                            { label: "Image", name: "image", widget: "image" },
                                            { label: "Subtitle", name: "subtitle", widget: "string" },
                                            { label: "Text", name: "text", widget: "text" },
                                        ]
                                }
                            ]
                        },
                        {
                            label: "StandardGoal",
                            name: "standardGoal",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                { label: "Image", name: "image", widget: "image"},
                                { label: "Logo", name: "logo", widget: "image"},
                            ]
                        },
                        {
                            label: 'Distribution',
                            name: "distribution",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Title", name: "title", widget: "string" },
                                            { label: "Text", name: "text", widget: "text" },
                                        ]
                                }
                            ]
                        },
                    ]
                },
                {
                    label: "DonorsPage",
                    name: "donorsPage",
                    file: "content/donorsPage.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "Top",
                            name: "top",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                { label: "ButtonText", name: "buttonText", widget: "string"},
                                { label: "ButtonTextMobile", name: "buttonTextMobile", widget: "string"},
                                { label: "Image", name: "image", widget: "image"},
                            ]
                        },
                        {
                            label: " Quote",
                            name: "quote",
                            widget: "object",
                            fields:[
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Text", name: "text", widget: "text" },
                                            { label: "Image", name: "image", widget: "image" },
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Info", name: "info", widget: "text" },
                                        ]
                                }
                            ]
                        },
                        {
                            label: "Honorable",
                            name: "honorable",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "ButtonText", name: "buttonText", widget: "string"},
                            ]
                        },
                        {
                            label: 'ProBono',
                            name: "proBono",
                            widget: "object",
                            fields: [
                                { label: "Title", name: "title", widget: "string" },
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Text", name: "text", widget: "text" },
                                            { label: "Link", name: "link", widget: "text" },
                                            { label: "Image", name: "image", widget: "image" },
                                        ]
                                }
                            ]
                        },
                    ]
                },
                {
                    label: "Governance",
                    name: "governance",
                    file: "content/governance.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "Top",
                            name: "top",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Title", name: "text", widget: "string" },
                                            {   label: 'Items',
                                                name: "items",
                                                widget: "list",
                                                fields:
                                                    [
                                                        { label: "Text", name: "text", widget: "text" },
                                                    ]
                                            }
                                        ]
                                },
                                {   label: 'ItemsMobile',
                                    name: "itemsMobile",
                                    widget: "list",
                                    fields:
                                      [
                                          { label: "Title", name: "title", widget: "string" },
                                          { label: "Text", name: "text", widget: "text", required: false},
                                      ]
                                }
                            ]
                        },
                        {
                            label: "Board",
                            name: "board",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                { label: "Subtitle", name: "subTitle", widget: "string"},
                                {   label: 'DocItems',
                                    name: "docItems",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Link", name: "link", widget: "string" },
                                        ]
                                },
                            ]
                        },
                        {
                            label: "Fund",
                            name: "fund",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Info", name: "info", widget: "text" },
                                        ]
                                },
                                { label: "Subtitle", name: "subTitle", widget: "string"},
                                {   label: 'DocItems',
                                    name: "docItems",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Link", name: "link", widget: "string" },
                                        ]
                                },
                            ]
                        },
                        {
                            label: "Company",
                            name: "company",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                { label: "Text", name: "text", widget: "text"},
                                { label: "TableTitle", name: "tableTitle", widget: "string"},
                                { label: "TableInfo", name: "tableInfo", widget: "string"},
                                { label: "TableRowTitle", name: "tableRowTitle", widget: "string"},
                                { label: "Subtitle", name: "subTitle", widget: "string"},
                                {   label: 'DocItems',
                                    name: "docItems",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Name", name: "name", widget: "string" },
                                            { label: "Link", name: "link", widget: "string" },
                                        ]
                                },
                            ]
                        },
                    ]
                },
                {
                    label: "FAQ",
                    name: "FAQ",
                    file: "content/faq.json",
                    fields: [
                        {
                            label: "SEOSection",
                            name: "seo",
                            widget: "object",
                            fields: [
                                {
                                    label: "SEOTitle",
                                    name: "title",
                                    widget: "string",
                                    required: false
                                },
                                {
                                    label: "SEODescription",
                                    name: "description",
                                    widget: "string",
                                    required: false
                                },
                            ],
                        },
                        {
                            label: "FAQ",
                            name: "faq",
                            widget: "object",
                            fields:[
                                { label: "Title", name: "title", widget: "string"},
                                {   label: 'Items',
                                    name: "items",
                                    widget: "list",
                                    fields:
                                        [
                                            { label: "Title", name: "title", widget: "string" },
                                            { label: "Text", name: "text", widget: "text" },
                                        ]
                                }
                            ]
                        },
                    ]
                },
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
                                { label: "logoBlack", name: "logoBlack", widget: "image"},
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
                                        { label: "Copy", name: "copy", widget: "markdown"},
                                        { label: "CopyMobile", name: "copy_mobile", widget: "markdown"}
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
                    label: "URL",
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
                            label: "Title",
                            name: "title",
                            widget: "string",
                            required: false
                        },
                        {
                            label: "Description",
                            name: "description",
                            widget: "string",
                            required: false
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