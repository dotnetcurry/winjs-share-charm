(function(){
    "use strict";
    var datatxmgr = Windows.ApplicationModel.DataTransfer.DataTransferManager;
    var dataitem;

    //define the page object
    WinJS.UI.Pages.define("/EmployeeShared.html", {
        ready: function (ele, options) {
            //Read the data passed from the sender page
            dataitem = options.item.data;

            //Extract text elements of the EmployeeShared.html and add the value attribute
            //for displaying the concern data.
            ele.querySelector(".dataeno").setAttribute("value", dataitem.EmpNo);

            ele.querySelector(".dataename").setAttribute("value", dataitem.EmpName);

            ele.querySelector(".datadname").setAttribute("value", dataitem.DeptName);

            //Subscribe the event for Data Transfer
            datatxmgr.getForCurrentView().addEventListener("datarequested", this.onDataRequested);
        },
        //Get the information to be shared
        onDataRequested: function (d)
        {
            var req = d.request;
            req.data.properties.title = dataitem.title;
            req.data.properties.description = "Employee Info";

            //Share Employee Info
            var einfo = "Employee Info " + dataitem.EmpNo + "\n" + dataitem.EmpName + "\n" + dataitem.DeptName;
            //set the text for sharing
            req.data.setText(einfo);
        },
        unload: function () {
            WinJS.Navigation.removeEventListener("datarequested", this.onDataRequested);
        }
    });

})();