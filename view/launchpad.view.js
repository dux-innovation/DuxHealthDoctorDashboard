sap.ui.jsview("view.launchpad",
{

    /**
     * Specifies the Controller belonging to this View. In the case that it is
     * not implemented, or that "null" is returned, this View does not have a
     * Controller.
     *
     * @memberOf view.launchpad
     */
    getControllerName: function()
    {
        return "view.launchpad";
    },

    /**
     * Is initially called once after the Controller has been instantiated. It
     * is the place where the UI is constructed. Since the Controller is given
     * to this method, its event handlers can be attached right away.
     *
     * @memberOf view.launchpad
     */
    createContent: function(oController)
    {

        var page = new sap.m.Page(
        {
            title: "Menu do Médico",
            showNavButton: true,
            backgroundDesign: sap.m.PageBackgroundDesign.Standard,

            content: [

                new sap.m.TileContainer("tile_container",
                {
                    height: "100%",
                    width: "100%",
                    allowAdd: true,
                    tiles: [

                        new sap.m.StandardTile("tile_pep",
                        {
                            title: "{i18n>Tile_Title_Pep}",
                            info: "{i18n>Tile_Info_Pep}",
                            icon: "sap-icon://activity-individual",
                            iconDensityAware: false,
                            removable: false,
                            press: function()
                            {
                                window.location.assign("../DuxHealthDoctorPepApp");
                            }
                        }),

                        new sap.m.StandardTile("tile_pep_history",
                        {
                            title: "{i18n>Tile_Title_PepHistory}",
                            info: "{i18n>Tile_Info_PepHistory}",
                            icon: "sap-icon://customer-history",
                            iconDensityAware: false,
                            removable: false,
                            press: function()
                            {
                                //window.location.assign("../DuxHealthDoctorPepHistoryApp");
                            }
                        }),

                        new sap.m.StandardTile("tile_calendar",
                        {
                            title: "{i18n>Tile_Title_Calendar}",
                            info: "{i18n>Tile_Info_Calendar}",
                            icon: "sap-icon://calendar",
                            iconDensityAware: false,
                            removable: false,
                            press: function()
                            {
                                //window.location.assign("../DuxHealthDoctorPepHistoryApp");
                            }
                        }),

                        new sap.m.StandardTile("tile_medical_certificate",
                        {
                            title: "{i18n>Tile_Title_Medical_Certificate}",
                            info: "{i18n>Tile_Info_Medical_Certificate}",
                            icon: "sap-icon://customer-and-contacts",
                            iconDensityAware: false,
                            removable: false,
                            press: function()
                            {
                                //window.location.assign("../DuxHealthDoctorPepHistoryApp");
                            }
                        }),

                        new sap.m.StandardTile("tile_next_patients",
                        {
                            title: "{i18n>Tile_Title_Next_Patients}",
                            info: "{i18n>Tile_Info_Next_Patients}",
                            icon: "sap-icon://group",
                            iconDensityAware: false,
                            removable: false,
                            press: function()
                            {
                                //window.location.assign("../DuxHealthDoctorPepHistoryApp");
                            }
                        }),


                    ]

                })

            ]
        });

        page.setEnableScrolling(false); // give a fixed height, so the TileContainer can use 100% height

        return page;
    }

});