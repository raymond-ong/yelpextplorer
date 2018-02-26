Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',

        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    dockedItems: [{
        dock: 'top',
        dockedItems: [{
            dock: 'top',
            xtype: 'banner'
        }],
    }],
    layout: 'border',
    items: [{
        region: 'center',
        html: 'businessestabpanel'
    }, {
        region: 'east',
        html: 'businessdetail',
        width: 130
    }]

});