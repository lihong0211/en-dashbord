import { ProTable } from '@ant-design/pro-components';
import { Card, Space } from 'antd';
import request from '../../../request';
import dayjs from 'dayjs';

type StatisticItemType = {
  user_name: string;
  platform: string;
  plugin_version: string;
  date: string;
  seconds: number;
  hms: string;
};

type DetailItemType = {
  user_name: string;
  platform: string;
  plugin_version: string;
  duration: string;
  login_time: string;
  logout_time: string;
};

export default function PluginStatistic() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Card title="插件统计列表">
        <ProTable<StatisticItemType>
          rowKey={(record) => `${record.user_name}-${record.platform}-${record.plugin_version}-${record.date}`}
          scroll={{ y: 460 }}
          search={{
            labelWidth: 'auto',
            defaultCollapsed: false,
          }}
          columns={[
            {
              dataIndex: 'user_name',
              title: '用户名',
              width: 120,
            },
            {
              dataIndex: 'platform',
              title: '平台',
              width: 100,
            },
            {
              dataIndex: 'plugin_version',
              title: '插件版本',
              width: 120,
            },
            {
              dataIndex: 'date',
              title: '日期',
              width: 120,
            },
            {
              dataIndex: 'hms',
              title: '使用时长',
              width: 120,
              hideInSearch: true,
            },
            {
              dataIndex: 'seconds',
              title: '秒数',
              width: 100,
              hideInSearch: true,
            },
            {
              title: '时间范围',
              dataIndex: 'timeRange',
              valueType: 'dateRange',
              hideInTable: true,
              initialValue: [
                dayjs('2025-06-01').startOf('day'), 
                dayjs('2025-06-30').endOf('day')
              ],
              fieldProps: {
                showTime: true,
                format: 'YYYY-MM-DD HH:mm:ss',
              },
            },
          ]}
          request={async ({ current, pageSize, timeRange, ...rest }) => {
            // 默认值：2025年6月1日到6月30日
            const defaultStart = dayjs('2025-06-01').startOf('day');
            const defaultEnd = dayjs('2025-06-30').endOf('day');
            
            const startTime = timeRange?.[0] 
              ? dayjs(timeRange[0]).format('YYYY-MM-DD HH:mm:ss')
              : defaultStart.format('YYYY-MM-DD HH:mm:ss');
            const endTime = timeRange?.[1]
              ? dayjs(timeRange[1]).format('YYYY-MM-DD HH:mm:ss')
              : defaultEnd.format('YYYY-MM-DD HH:mm:ss');

            const data = await request.post(`/api/peach/plugin-statistics/list`, {
              page: current,
              size: pageSize,
              startTime,
              endTime,
              ...rest,
            });
            return {
              success: true,
              ...data,
            };
          }}
        />
      </Card>
    </Space>
  );
}
