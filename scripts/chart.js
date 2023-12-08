const ctx = document.getElementById("myChart");

let xAxis
let labelsDev, labelsAnalytics, labelsDesign;
let dataDev, dataAnalytics, dataDesign;

if (window.innerWidth <= 768) {
    
    xAxis = [1, 2, 3, 4, 5, 6];

    labelsDev = [
        "",
        "JS",
        "Responsive\nWeb Design",
        "Front-End\nFrameworks",
        "Version\nControl",
        "API Development\n& Integration",
        "Database Design\n& Management",
    ];
    labelsAnalytics = [
        "",
        "Data\nVisualization",
        "Data\nCleaning",
        "EDA",
        "Data\nInterpretation",
        "Data\nReporting",
        "Data\nMining",
    ];
    labelsDesign = [
        "",
        "UX/UI",
        "User\nResearch",
        "User-Centered\nDesign",
        "Accessibility\nGuidelines",
        "Wireframing and\nPrototyping",
        "Visual Design\nPrinciples",
    ];

    dataDev = [9, 12, 9, 13, 11, 15];
    dataAnalytics = [6, 9, 6, 10, 8, 12];
    dataDesign = [2, 5, 2, 6, 4, 9];

} else {

    xAxis = [1, 2, 3, 4, 5, 6, 7, 8];

    labelsDev = [
        "",
        "JS",
        "Responsive\nWeb Design",
        "Front-End\nFrameworks",
        "Version\nControl",
        "API Development\n& Integration",
        "Database Design\n& Management",
    ];
    labelsAnalytics = [
        "",
        "Data\nVisualization",
        "Data\nCleaning",
        "EDA",
        "Data\nInterpretation",
        "Data\nReporting",
        "Data\nMining",
    ];
    labelsDesign = [
        "",
        "UX/UI",
        "User\nResearch",
        "User-Centered\nDesign",
        "Accessibility\nGuidelines",
        "Wireframing and\nPrototyping",
        "Visual Design\nPrinciples",
    ];

    dataDev = [7, 9, 12, 9, 13, 11, 15, 12];
    dataAnalytics = [4, 6, 9, 6, 10, 8, 12, 9];
    dataDesign = [0, 2, 5, 2, 6, 4, 9, 6];
}

const chart = new Chart(ctx, {
    type: "line",

    data: {
        labels: xAxis,
        datasets: [
            {
                label: "Dev",
                data: dataDev,
                tension: 0.5,
                fill: true,
                order: 3,
                borderColor: "#32837D80",
                backgroundColor: "#F5A7B4",
                borderWidth: 1,

                datalabels: {
                    anchor: "end",
                    align: "start",
                    offset: 5,
                    color: "#15595870",
                    font: {
                        size: "10",
                    },
                    formatter: function (value, context) {
                        const dataIndex = context.dataIndex;
                        if (dataIndex >= 0 && dataIndex < labelsDev.length) {
                            return labelsDev[dataIndex].split("\n");
                        }
                        return "";
                    },
                },
            },
            {
                label: "Analytics",
                data: dataAnalytics,
                tension: 0.5,
                fill: true,
                order: 2,
                borderColor: "#32837D80",
                backgroundColor: "#FDDDE0",
                borderWidth: 1,

                datalabels: {
                    anchor: "end",
                    align: "start",
                    offset: 3,
                    color: "#15595890",
                    font: {
                        size: "10",
                    },
                    formatter: function (value, context) {
                        const dataIndex = context.dataIndex;
                        if (
                            dataIndex >= 0 &&
                            dataIndex < labelsAnalytics.length
                        ) {
                            return labelsAnalytics[dataIndex].split("\n");
                        }
                        return "";
                    },
                },
            },
            {
                label: "Design",
                data: dataDesign,
                tension: 0.5,
                fill: true,
                order: 1,
                borderColor: "#32837D80",
                backgroundColor: "#FEC2CC",
                borderWidth: 1,
                datalabels: {
                    anchor: "end",
                    align: "start",
                    offset: 3,
                    color: "#15595890",
                    font: {
                        size: "10",
                    },
                    formatter: function (value, context) {
                        const dataIndex = context.dataIndex;
                        if (dataIndex >= 0 && dataIndex < labelsDesign.length) {
                            return labelsDesign[dataIndex].split("\n");
                        }
                        return "";
                    },
                },
            },
        ],
    },

    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: "linear",
                from: 0.3,
                to: 0.5,
                loop: true,
            },
        },

        scales: {
            x: {
                display: false,
                beginAtZero: true,
            },
            y: {
                display: false,
                beginAtZero: true,
            },
        },

        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        },

        layout: {
            autopadding: false,
            padding: 0,
        },

        maintainAspectRatio: false,
        aspectRatio: 1,
    },

    plugins: [ChartDataLabels],

    responsive: true,
});

function adjustChartForMobile() {
    for (var i = 0; i < chart.data.datasets.length; i++) {
        chart.data.datasets[i].datalabels.font.size = 7;
    }
    chart.update();
}

function adjustChartForLarger() {
    for (var i = 0; i < chart.data.datasets.length; i++) {
        chart.data.datasets[i].datalabels.font.size = 12;
    }
    chart.update();
}

chart.render();

window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
        adjustChartForMobile();
    } else if (window.innerWidth >= 1200) {
        adjustChartForLarger();
    } else {
        location.reload(); // Refresh the page
    }
});

/* function createGradient(ctx, startX, startY, endX, endY, colors) {
    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    for (let i = 0; i < colors.length; i++) {
        gradient.addColorStop(i / (colors.length - 1), colors[i]);
    }
    return gradient;
}

async function applyGradientBackground(chartInstance) {
    return new Promise((resolve, reject) => {
        for (const dataset of chartInstance.data.datasets) {
            if (dataset.label === "Design") {
                dataset.backgroundColor = createGradient(
                    chartInstance.ctx,
                    0,
                    0,
                    0,
                    chartInstance.chartArea.bottom,
                    [
                        "rgba(255,255,255,1)",
                        "rgba(255,255,255,0.5)",
                        "rgba(255,255,255,0.1)",
                    ]
                );
            } else if (dataset.label === "Analytics") {
                dataset.backgroundColor = createGradient(
                    chartInstance.ctx,
                    0,
                    0,
                    0,
                    chartInstance.chartArea.bottom,
                    [
                        "rgba(253,185,200,1)",
                        "rgba(253,185,200,0.5)",
                        "rgba(253,185,200,0)",
                    ]
                );
            } else if (dataset.label === "Dev") {
                dataset.backgroundColor = createGradient(
                    chartInstance.ctx,
                    0,
                    0,
                    0,
                    chartInstance.chartArea.bottom,
                    [
                        "rgba(253,110,135,1)",
                        "rgba(253,110,135,1)",
                        "rgba(253,110,135,0.8)",
                        "rgba(253,110,135,0.5)",
                        "rgba(253,110,135,0)",
                    ]
                );
            }
        }

        resolve();
    });
}

applyGradientBackground(chart); */
