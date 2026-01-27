import { ProTable } from '@ant-design/pro-components';
import { Card, Tag } from 'antd';
import request from '../../../request';
import ReactJsonView from 'react-json-view';

type ItemType = {
  id: number;
  platform: string;
  patientSex: string;
  patientAge: number;
  primaryDiagnosis: string;
  medicines: string;
  pass_flag: boolean;
  params: string;
  error: string;
  isNotMatch: boolean;
  pdd_report: string;
  medicineName: string;
  specification: string;
  takeDirection: string;
  takeFrequence: string;
  medicineAmount: string;
  takeDose: string;
  formType: string;
  create_time: string;
};

export default function CheckResult() {
  return (
    <ProTable<ItemType>
      rowKey="id"
      scroll={{ y: 460, x: 1500 }}
      columns={[
        {
          dataIndex: 'platform',
          title: '平台',
          width: 100,
        },
        {
          dataIndex: 'patientSex',
          title: '性别',
          width: 80,
          hideInSearch: true,
        },
        {
          dataIndex: 'patientAge',
          title: '年龄',
          width: 80,
          hideInSearch: true,
        },
        {
          dataIndex: 'primaryDiagnosis',
          title: '主要诊断',
          width: 150,
          ellipsis: true,
        },
        {
          dataIndex: 'medicineName',
          title: '药品名称',
          width: 150,
          ellipsis: true,
        },
        {
          dataIndex: 'specification',
          title: '规格',
          width: 120,
          hideInSearch: true,
        },
        {
          dataIndex: 'formType',
          title: '剂型',
          width: 100,
          hideInSearch: true,
        },
        {
          dataIndex: 'takeDose',
          title: '用量',
          width: 100,
          hideInSearch: true,
        },
        {
          dataIndex: 'takeDirection',
          title: '用法',
          width: 120,
          hideInSearch: true,
        },
        {
          dataIndex: 'takeFrequence',
          title: '频次',
          width: 100,
          hideInSearch: true,
        },
        {
          dataIndex: 'pass_flag',
          title: '通过',
          width: 80,
          hideInSearch: true,
          render: (_, entity) => (
            <Tag color={entity.pass_flag ? 'green' : 'red'}>
              {entity.pass_flag ? '是' : '否'}
            </Tag>
          ),
        },
        {
          dataIndex: 'isNotMatch',
          title: '不匹配',
          width: 80,
          hideInSearch: true,
          render: (_, entity) => (
            <Tag color={entity.isNotMatch ? 'red' : 'green'}>
              {entity.isNotMatch ? '是' : '否'}
            </Tag>
          ),
        },
        {
          dataIndex: 'error',
          title: '错误信息',
          width: 200,
          ellipsis: true,
          hideInSearch: true,
        },
        {
          dataIndex: 'medicineName',
          title: '药品信息',
          hideInSearch: true,
        },
      ]}
      request={async ({ current, pageSize, ...rest }) => {
        const data = await request.post(`/api/peach/check-result/list`, {
          page: current,
          size: pageSize,
          query: {
            ...rest,
          },
        });
        return {
          success: true,
          ...data,
        };
      }}
    />
  );
}
