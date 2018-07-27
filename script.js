var viz;
var workbook, activeSheet;

$( document ).ready(function() {
    initViz();
});

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        // url = "https://public.tableau.com/views/Book2_22214/Dashboard1",
        url = "https://public.tableau.com/views/Book2_22214/RegionProfit"
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                workbook = viz.getWorkbook();
                activeSheet = workbook.getActiveSheet();
                // renderActionBtns();
            }
        };

    viz = new tableau.Viz(containerDiv, url, options);
    

}

function renderActionBtns(){
    $(".actionBtnDiv").show();
}
function queryDashboard() {
    workbook.activateSheetAsync("Region Profit").then(function (dashboard) {
        // debugger;
        // var worksheets = dashboard.getWorksheets();
        // var text = getSheetsAlertText(worksheets);
        // text = "Worksheets in the dashboard:\n" + text;
        // alert(text);
    });
} 

        