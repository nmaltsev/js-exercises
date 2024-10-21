import {deepmerge} from './deepmerge.mjs'

(function(){
    const   $form = document.getElementById('form'),
            $json = document.getElementById('json'),
            $updates = document.getElementById('updates'),
            $results = document.getElementById('results');
    
    $form.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
        const originalDoc = saveParse(e.target.elements.json.value)
        const updatesDoc = saveParse(e.target.elements.updates.value)

        deepmerge(originalDoc, updatesDoc)
        $results.textContent = JSON.stringify(originalDoc, null, '\t')
    })
    $json.value = JSON.stringify({options: [{id: 1, value:'item1'}, {id: 2, value:'item2'}]}, null, '\t')
    $updates.value = JSON.stringify({options: [{id: 3, value:'item3'}]}, null, '\t')
}());

function saveParse(str) {
    try {
        return JSON.parse(str)
    } catch(e) {
        return null;
    }
}
