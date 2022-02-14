var options = {
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
        
        },
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
        breakpoint: 360,
        options: {},
    }],
    
    series: [
      {
        name: "Series 1",
        data: [5,15,10,15,18,20]
      }
    ],

    
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,      
    }, 

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    title: {
        text: "Last 30 days",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '18px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    },
    
    grid: {
        show: false,
    },
    xaxis: {
      categories: [
        "01 Apr",
        "07 Apr",
        "12 Apr",
        "16 Apr",
        "21 Apr",
        "28 Apr",
        "30 Apr" 
      ]
    },
    
    yaxis: {
        show: true,
        showAlways: true,
        
        seriesName: "Series 1",
        opposite: false,
        reversed: false,
        logarithmic: false,
        tickAmount: 6,
        min: 5,
        max: 30,
        forceNiceScale: true,
        floating: false,
        decimalsInFloat: undefined,   
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  