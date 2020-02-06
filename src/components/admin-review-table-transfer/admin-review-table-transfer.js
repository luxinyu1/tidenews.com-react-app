import React from 'react';
import { Transfer, Table, Tag } from 'antd';
import difference from 'lodash/difference';
import './admin-review-table-transfer.css';

// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
	<Transfer {...restProps} showSelectAll={false}>
		{({
		direction,
		filteredItems,
		onItemSelectAll,
		onItemSelect,
		selectedKeys: listSelectedKeys,
		disabled: listDisabled,
		}) => {
		const columns = direction === 'left' ? leftColumns : rightColumns;

		const rowSelection = {
			getCheckboxProps: item => ({ disabled: listDisabled || item.disabled }),
			onSelectAll(selected, selectedRows) {
			const treeSelectedKeys = selectedRows
				.filter(item => !item.disabled)
				.map(({ key }) => key);
			const diffKeys = selected
				? difference(treeSelectedKeys, listSelectedKeys)
				: difference(listSelectedKeys, treeSelectedKeys);
			onItemSelectAll(diffKeys, selected);
			},
			onSelect({ key }, selected) {
			onItemSelect(key, selected);
			},
			selectedRowKeys: listSelectedKeys,
		};

		return (
			<Table
			rowSelection={rowSelection}
			columns={columns}
			dataSource={filteredItems}
			size="small"
			style={{ pointerEvents: listDisabled ? 'none' : null }}
			onRow={({ key, disabled: itemDisabled }) => ({
				onClick: () => {
					if (itemDisabled || listDisabled) return;
					onItemSelect(key, !listSelectedKeys.includes(key));
				},
			})}
			/>
		);
		}}
	</Transfer>
);

const mockTags = ['cat', 'dog', 'bird'];

const mockData = [];
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i + 1}`,
		description: `description of content${i + 1}`,
		disabled: i % 4 === 0,
		tag: mockTags[i % 3],
	});
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
	{
		dataIndex: 'title',
		title: '标题',
	},
	{
		dataIndex: 'tag',
		title: '标签',
		render: tag => <Tag>{tag}</Tag>,
	},
	{
		dataIndex: 'description',
		title: '摘要',
	},
	];
	const rightTableColumns = [
	{
		dataIndex: 'title',
		title: '标题',
	},
	{
		dataIndex: 'tag',
		title: '标签',
		render: tag => <Tag>{tag}</Tag>,
	},
	{
		dataIndex: 'description',
		title: '摘要',
	},
];

class AdminReviewTableTransfer extends React.Component {
	state = {
		targetKeys: originTargetKeys,
		disabled: false,
		showSearch: false,
	};

	onChange = nextTargetKeys => {
		this.setState({ targetKeys: nextTargetKeys });
	};

	render() {
		const { targetKeys } = this.state;
		return (
		<div className="admin-review-table-transfer">
			<TableTransfer
			dataSource={mockData}
			targetKeys={targetKeys}
			showSearch
			onChange={this.onChange}
			filterOption={(inputValue, item) =>
				item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
			}
			leftColumns={leftTableColumns}
			rightColumns={rightTableColumns}
			/>
		</div>
		);
	}
}

export default AdminReviewTableTransfer;