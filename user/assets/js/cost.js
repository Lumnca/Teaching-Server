new Vue({
    el : '#app',
    data : {
        main : [
            {
                title : '余额',
                icon  : 'fa-credit-card',
                number : 20000,
                color : 'background: #89B9EB'
            },
            {
                title : '产品',
                icon  : 'fa-cubes',
                number : 3,
                color : 'background: #A766A4'
            },
            {
                title : '花费',
                icon  : 'fa-shopping-cart',
                number : 78500,
                color : 'background: #E62C2C'
            },
            {
                title : '优惠券',
                icon  : 'fa-ticket ',
                number : 7,
                color : 'background: #21D56C'
            }
        ],
        //表格数据
        tableData: [{
            type: '充值余额',
            number: '15000',
            other: ''
          }, {
            type: '赠送费用',
            number: '3500',
            other: '每月/+20'
          }, {
            type: '优惠券',
            number: '1500',
            other: '折扣抵押'
          },
          {
            type: '总计',
            number: '20000',
            other: ''      
          }
        ],
        spendData : [
            {
                type : '包年VIP',
                number : '20000',
                date : '2017/9/12',
                info : ''
            },
            {
                type : '包年VIP',
                number : '20000',
                date : '2018/9/12',
                info : ''
            },
            {
                type : '包年VIP',
                number : '20000',
                date : '2019/9/12',
                info : ''
            },
            {
                type : '押金',
                number : '18500',
                date : '2019/9/14',
                info : ''
            },
            {
                type : '总计',
                number : '78500',
                date : '',
                info :  ''          
            }
        ],
        addMouth : 20,
        addBalance : 0
    }
})


/*
*
*饼状图Echar装配
*
*/
var option1 = {
    title : {
        text: '用户余额',
        subtext: '余额分类',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['充值费用','赠送费用','其他']
    },
    series : [
        {
            name: '费用来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:15000, name:'充值费用'},
                {value:3500, name:'赠送费用'},
                {value:1500, name:'其他'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var balance =echarts.init(document.getElementById('balance'));
balance.setOption(option1);