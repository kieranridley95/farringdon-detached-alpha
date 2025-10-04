const reportMap = {
    report1: 'match-reports/test.txt',
};

function loadReport(buttonId) {
    const fileName = reportMap[buttonId];
    if (!fileName) {
        document.getElementById('reportContainer').innerText = 'Report not found.';
        return;
    }

    fetch(fileName)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load report');
            return response.text();
        })
        .then(data => {
            document.getElementById('reportContainer').innerText = data;
        })
        .catch(error => {
            document.getElementById('reportContainer').innerText = 'Error: ' + error.message;
        });
}