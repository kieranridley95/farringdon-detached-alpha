const reportMap = {
    report1: 'match-reports/test.txt',
    report2: 'match-reports/whickham-home.txt',
    report3: 'match-reports/wrekenton-home.txt',
    report4: 'match-reports/westrainton-away.txt',
    report5: 'match-reports/wearside-home.txt'

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
