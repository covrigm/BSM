Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Dell Rapids Area News'
                },

                html: [
                    "Build something!"
                ].join("")
            },
            {
                title: 'News',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'News'
                    },
                    {
                        xtype: 'video',
                        url: 'gettingstartedproject.mp4',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
