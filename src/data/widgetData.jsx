export const initialWidgetData = {
  'CSPM Executive Dashboard': [
    {
      id: 1,
      title: 'Cloud Accounts',
      type: 'pie',
      data: {
        labels: ['Connected', 'Not Connected'],
        datasets: [
          {
            data: [2, 0],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Cloud Account Risk Assessment',
      type: 'doughnut',
      data: {
        labels: ['Failed', 'Warning', 'Passed'],
        datasets: [
          {
            data: [10, 5, 25],
            backgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0']
          }
        ]
      }
    }
  ],
  'CWPP Dashboard': [
    {
      id: 3,
      title: 'CWPP Summary',
      type: 'cwpp',
      data: {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        datasets: [
          {
            data: [5, 10, 15, 20],
            backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#4BC0C0'],
            hoverBackgroundColor: ['#FFCE56', '#FF6384', '#36A2EB', '#4BC0C0']
          }
        ]
      }
    }
  ],
  'Image Dashboard': [
    {
      id: 4,
      title: 'Security Architecture',
      type: 'image',
      data: {
        imageUrl: '/path/to/security-architecture-image.png'
      }
    }
  ],
  'Ticket Dashboard': [
    {
      id: 5,
      title: 'Open vs Closed Tickets',
      type: 'ticket',
      data: {
        labels: ['Open', 'Closed'],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ['#FFCE56', '#36A2EB'],
            hoverBackgroundColor: ['#FFCE56', '#36A2EB']
          }
        ]
      }
    }
  ]
};
