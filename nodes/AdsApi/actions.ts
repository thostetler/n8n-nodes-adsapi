import { INodeProperties } from 'n8n-workflow';

export const actions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['search'],
			},
		},

		options: [
			{
				name: 'Basic Search',
				value: 'basicSearch',
				description: 'Perform a GET request',
				routing: {
					request: {
						method: 'GET',
						url: '/search/query',
					},
				},
				action: 'Perform a basic search',
			},
		],

		default: 'basicSearch',
	},
	{
		displayName: 'Query Parameters',
		name: 'arguments',
		default: {
			q: '',
			fl: 'title,abstract,author,aff,bibcode',
			rows: 10,
			start: 0,
			sort: 'date desc',
		},
		placeholder: 'Add Query Parameters',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ['basicSearch'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'query',
							},
						},
						required: true,
						description: 'Value of query parameter',
					},
				],
			},
		]
	}
];
