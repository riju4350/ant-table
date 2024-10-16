import { CopyOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
// import { useState } from 'react';

let customerID = '';
let customerName = '';
let deliveryAddress = '';
const columns = [
  {
    title: 'Customer Id',
    dataIndex: 'customerId',
    key: 'customerId',
    render: (text) => { 
      return(
       <div style={{display: 'flex', alignItems:'center'}}>
       {text} 
       <CopyOutlined style={{width:'12px', height: '12px', marginLeft:'5px', color:'green' }} 
       onClick={() => {customerID = text.toString(); console.log(customerID);}}>{text}</CopyOutlined>
       </div>
      ) 
     }
  },
  {
    title: 'Customer name',
    dataIndex: 'customerName',
    key: 'customerName',
    render: (text) => { 
      return(
       <div style={{display: 'flex', alignItems:'center'}}>
       {text} 
       <CopyOutlined style={{width:'12px', height: '12px', marginLeft:'5px', color:'green' }} 
       onClick={() => {customerName = text.toString(), console.log(customerName)}}>{text}</CopyOutlined>
       </div>
      ) 
     }
  },
  {
    title: 'Print Name',
    dataIndex: 'printName',
    key: 'printName',
  },
  {
    title: 'Font',
    dataIndex: 'font',
    key: 'font',
    filters:[
      {text: 'Bubblegum', value:'bubblegum'},
      {text: 'Ekamai', value:'ekamai'},
      {text: 'Riffic', value:'riffic'},
      {text: 'House movement', value:'house movement'}
    ],
    onFilter:(value, record)=>{
      return record.font === value;
    }
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
    filters:[
      {text: 'Red', value:'red'},
      {text: 'Black', value:'black'},
      {text: 'Yellow', value:'yellow'},
      {text: 'Orange', value:'orange'},
      {text: 'White', value:'white'},
      {text: 'Gray', value:'gray'},
      {text: 'Purple', value:'purple'},
      {text: 'Blue', value:'blue'}
    ],
    onFilter:(value, record)=>{
      return record.color === value;
    } 
  },
  
  {
    title: 'Product cost',
    dataIndex: 'productCost',
    key: 'productCost',
  },
  {
    title: 'Delivery cost',
    dataIndex: 'deliveryCost',
    key: 'deliveryCost',
  },
  {
    title: 'Total bill',
    dataIndex: 'totalBill',
    key: 'totalBill',
  },
  {
    title: 'Order date',
    dataIndex: 'orderDate',
    key: 'orderDate',
  },
  {
    title: 'Tentative delivery date',
    dataIndex: 'tentativeDeliveryDate',
    key: 'tentativeDeliveryDate',
  },
  {
    title: 'Order status',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (_, { orderStatus }) => (
      <>
        {orderStatus.map((status) => {
          let color = status.length > 15 ? 'yellow' : 'green';
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Delivery status',
    dataIndex: 'deliveryStatus',
    key: 'deliveryStatus',
    render: (_, { deliveryStatus }) => (
      <>
        {deliveryStatus.map((status) => {
          let color = status.length === 18 ? 'yellow' : 'purple';
          if(status === 'delivery completed'){
            color = 'green'
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Ongoing printer',
    dataIndex: 'ongoingPrinter',
    key: 'ongoingPrinter',
  },
  {
    title: 'Delivery address',
    dataIndex: 'deliveryAddress',
    key: 'deliveryAddress',
    render: (text) => { 
      return(
       <div style={{display: 'flex', alignItems:'center'}}>
       {text} 
       <CopyOutlined style={{width:'12px', height: '12px', marginLeft:'5px', color:'green' }} 
       onClick={() => {deliveryAddress = text.toString(), console.log(deliveryAddress)}}>{text}</CopyOutlined>
       </div>
      ) 
     }
  },

];
const data = [
  {
    key: '1',
    customerId: 322340,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    customerId: 322342,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '3',
    customerId: 323429,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'blue',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '4',
    customerId: 323423,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'orange',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '5',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '6',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'purple',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '7',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'purple',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '8',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '9',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'blue',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '10',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '11',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '12',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '13',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '14',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '15',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '16',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '17',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'white',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '18',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'black',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '19',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '20',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'purple',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '21',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '22',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'black',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '23',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'black',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '24',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '25',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '26',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '27',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '28',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '29',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'purple',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '30',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '31',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '32',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'blue',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '33',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '34',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '35',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'white',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '36',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '37',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'house movement',
    color: 'white',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '38',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '39',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'red',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '40',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '41',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'black',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '42',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai',
    color: 'yellow',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '43',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'riffic',
    color: 'purple',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '44',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'bubblegum',
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park'
  },
  {
    key: '45',
    customerId: 323427,
    customerName: 'John Brown',
    printName: 'TAGBD',
    font: 'ekamai', 
    color: 'gray',
    productCost: '140',
    deliveryCost: '110',
    totalBill: '250',
    orderDate: '02/07/24',
    tentativeDeliveryDate: '02/10/24',
    orderStatus: ['file ready for print', 'print completed'],
    deliveryStatus: ['ready for delivery', 'agent collected', 'delivery completed'],
    ongoingPrinter: '',
    deliveryAddress: 'New York No. 1 Lake Park',
    // onClick: <Button onClick={'clicked'}><CopyOutlined></CopyOutlined></Button>
  },

];

const App = () => {
  // const [clientId, setClientId] = useState('');
  // const [clientName, setClientName] = useState('');
  // const [deliveryAddress, setDeliveryAddress] = useState('');
    return(
      <div className='table-container'>
        <Table className='table' columns={columns} dataSource={data}  pagination={{ pageSize: 15 }}/>
        {/* <div>`${customerID}`</div> */}
        <div>{customerID}</div>
        {/* <Button style={{width:'25px', height:'25px', padding:'5px 0px'}} onClick={(e)=> console.log(e.target.value)}><CopyOutlined></CopyOutlined></Button> */}
      </div>
    );
}
export default App;
