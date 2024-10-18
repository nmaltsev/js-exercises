import { deepmerge } from "./deepmerge.mjs";
const newAssetForm = {
    name: 'dataset',
    fields: [
        {
            type: 'ControlType.TextLabel',
            name: 'subtitle',
            label: 'A repository contains all dataset files, including the revision history.',
            isModal: true
        },
        {
            type: 'ControlType.TextField',
            name: 'owner',
            label: 'Owner',
        },
        {
            type: 'ControlType.TextLabel',
            label: '/',
            name: 'splitter'
        },
        {
            type: 'ControlType.TextField',
            name: 'name',
            label: 'Dataset name',
            placeholder: 'New dataset name',
            required: true,
        },
        {
            type: 'ControlType.Select',
            label: 'License',
            name: 'license',
            isModal: true,
            options: []
        },
        {
            type: 'ControlType.Radio',
            label: 'Visibility',
            name: 'visibility',
            defaultValue: 'ASSET_VISIBILITY.public',
            isModal: true,
            options: [
                { 
                    value: 'ASSET_VISIBILITY.public', 
                    label: 'Public', 
                    tooltip: 'Anyone on the internet can see this dataset. Only you (personal dataset) or members of your organization (organization dataset) can commit.' 
                },
                { 
                    value: 'ASSET_VISIBILITY.private', 
                    label: 'Private', 
                    tooltip: 'Only you (personal dataset) or members of your organization (organization dataset) can see and commit to this dataset' }
            ]
        },
        {
            type: 'ControlType.Radio',
            label: 'Source',
            name: 'source',
            defaultValue: 'user',
            isModal: true,
            options: [
                { value: 'SOURCE_TYPE.user', label: 'User Asset' },
                { value: 'SOURCE_TYPE.external', label: 'External Asset', tooltip: 'Create a dataset from remote URLs' },
            ]
        },
        {
            type: 'ControlType.TextLabel',
            label: 'Once your dataset is created, you can upload your files.',
            name: 'footer',
            isModal: true
        },
    ]
};
const newDatasetForm = {
    fields: [
        {name: 'subtitle', label: 'A repository contains all dataset files, including the revision history.'},
        {name: 'name', label: 'Dataset name', placeholder: 'New dataset name'},
        {name: 'visibility', options: [
            {label: 'Public', tooltip: 'Anyone on the internet can see this dataset. Only you (personal dataset) or members of your organization (organization dataset) can commit.'},
            {label: 'Private', tooltip: 'Only you (personal dataset) or members of your organization (organization dataset) can see and commit to this dataset'}
        ]},
        {name: 'source', options: [{label: 'External Asset', tooltip: 'Create a dataset from remote URLs'}]},
        {name: 'footer', label: 'Once your model is created, you can upload your files.'}
    ]
}

const original1 = {
    fields: [
        {
            id: 1,
            name: 'item1',
            label: 'Item1',
            type: 'type1',
            metadata: {
                a: 1,
                b: 1
            }
        },
        {
            id: 2,
            name: 'item2',
            label: 'Item2',
            type: 'type1',
            metadata: {
                a: 2,
                b: 2
            }
        },
        {
            id: 3,
            name: 'item3',
            label: 'Item3',
            type: 'type2',
            metadata: {
                a: 3,
                b: 3
            }
        }
    ]
}
const updates1 = {
    fields: [
        {
            id: 1,
            name: 'item1mod',
            placeholder: 'abc',
            // __id: ['id']
        },
        {
            id: 4,
            name: 'item4',
            label: 'Item4',
            metadata: {
                a: 4,
                b: 4
            }
        },
        {
            type: 'type1',
            alias: 'dataset',
        }
    ]
}

const original2 = [
    {
        id: 1,
        value: 'test'
    },
    {
        id: 2,
        value: 'test'
    }
]
const updates2 = [
    {
        id: 3,
        value: 'test',
        __id: ['id'], // use __id: ['id] to specify better identification of similarities
    }
]

deepmerge(original1, updates1)
console.dir(original1)

console.log('\nTest2')
deepmerge(original2, updates2)
console.dir(original2)

console.log('\nTest3')
deepmerge(newAssetForm, newDatasetForm);
console.log(JSON.stringify(newAssetForm, null, '\t'))