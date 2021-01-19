sap.ui.define([
     "sd/SmartDateRange/controller/BaseController",
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sd.SmartDateRange.controller.App", {
            onInit: function () {

            },
            onCustomFilter: function (oEvent) {
                var oTableSearchState = [];
                var sQuery = this.byId("idEmpy").getSelectedItem().getText();
                oTableSearchState = [new sap.ui.model.Filter("Empid", sap.ui.model.FilterOperator.EQ, sQuery)];
              var smartTable =  this.getView().byId("smartTable_ResponsiveTable");
              smartTable.rebindTable();
            },

            
 onBeforeRebind : function(oEvent) {

	var oBindingParams = oEvent.getParameter("bindingParams");
	
	var aFilters = oBindingParams.filters;
	
	var oSmartTable = oEvent.getSource();
	
	var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
		if (oSmartFilterBar instanceof sap.ui.comp.smartfilterbar.SmartFilterBar) {
			var oCustomControl = oSmartFilterBar.getControlByKey("Empid");
    			if (oCustomControl instanceof sap.m.Select) {
					var sQualStat = oCustomControl.getSelectedItem().getText();
					oBindingParams.filters.push(new sap.ui.model.Filter("Empid", "EQ", sQualStat));
				}
			}
	}


        });
    });
