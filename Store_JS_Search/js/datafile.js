(function () {
    "use strict";
    var employeeArray = [
        { EmpNo: "101", EmpName: "Mahesh", DeptName: "CTD" },
        { EmpNo: "102", EmpName: "Mohan", DeptName: "IT" },
        { EmpNo: "103", EmpName: "Makrand", DeptName: "CTD" },
        { EmpNo: "104", EmpName: "Mandar", DeptName: "IT" },
        { EmpNo: "105", EmpName: "Milind", DeptName: "CTD" },
        { EmpNo: "106", EmpName: "Manohar", DeptName: "IT" },
        { EmpNo: "107", EmpName: "Mukund", DeptName: "CTD" },
        { EmpNo: "108", EmpName: "Madhav", DeptName: "IT" },
        { EmpNo: "109", EmpName: "Mithilesh", DeptName: "CTD" },
        { EmpNo: "110", EmpName: "Madan", DeptName: "IT" }
    ];

    var empList = new WinJS.Binding.List(employeeArray);
    //Create a new namespace to make data publicly accessible
    var publicMembers = {
        empDataList: empList
    };
    WinJS.Namespace.define("EmpDataListExample", publicMembers);



})();