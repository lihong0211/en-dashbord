import { ProTable } from '@ant-design/pro-components';
import { Card, Tag } from 'antd';
import request from '../../../request';
import ReactJsonView from 'react-json-view';

type ItemType = {
  id: number;
  pharmacist: string;
  patientSex: string;
  patientAge: number;
  primaryDiagnosis: string;
  medicines: string;
  pass: boolean;
  reason: string;
  query: string;
  rpID: string;
  refuse: number;
  costTime: number;
  create_time: string;
};

export default function AliReport() {
  return (
    <ProTable<ItemType>
      rowKey="id"
      scroll={{ y: 460 }}
      columns={[
        {
          dataIndex: 'rpID',
          title: '报告ID',
          width: 120,
        },
        {
          dataIndex: 'pharmacist',
          title: '药师',
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
          dataIndex: 'pass',
          title: '通过',
          width: 80,
          hideInSearch: true,
          render: (_, entity) => (
            <Tag color={entity.pass ? 'green' : 'red'}>
              {entity.pass ? '是' : '否'}
            </Tag>
          ),
        },
        {
          dataIndex: 'refuse',
          title: '拒绝次数',
          width: 100,
          hideInSearch: true,
        },
        {
          dataIndex: 'costTime',
          title: '耗时(ms)',
          width: 100,
          hideInSearch: true,
        },
        {
          dataIndex: 'reason',
          title: '原因',
          width: 150,
          ellipsis: true,
          hideInSearch: true,
        },
        {
          dataIndex: 'medicines',
          title: '药品信息',
          hideInSearch: true,
        },
        {
          dataIndex: 'create_time',
          title: '创建时间',
          width: 180,
          hideInSearch: true,
        },
      ]}
      request={async ({ current, pageSize, ...rest }) => {
        const data = await request.post(`/api/peach/ali-report/list`, {
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
