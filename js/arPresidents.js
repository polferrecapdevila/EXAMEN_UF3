let arPresidents=[
    {surname:'Biden',
    name:'Joe',
    date: 'January 20, 2021',
    party: 'Democratic',
    number: 46},
    {surname:'Bush',
    name:'George H. W.',
    date: 'January 20, 1989',
    party: 'Republican',
    number: 41},
    {surname:'Bush',
    name:'George W.',
    date: 'January 20, 2001',
    party: 'Republican',
    number: 43},
    {surname:'Carter',
    name:'Jimmy',
    date: 'January 20, 1977',
    party: 'Democratic',
    number: 39},
    {surname:'Clinton',
    name:'Bill',
    date: 'January 20, 1993',
    party: 'Democratic',
    number: 42},
    {surname:'Eisenhower',
    name:'Dwight D.',
    date: 'January 20, 1953',
    party: 'Republican',
    number: 34},
    {surname:'Johnson',
    name:'Lyndon B.',
    date: 'January 20, 1965',
    party: 'Democratic',
    number: 36},
    {surname:'Kennedy',
    name:'John F.',
    date: 'January 20, 1961',
    party: 'Democratic',
    number: 35},
    {surname:'Nixon',
    name:'Richard',
    date: 'January 20, 1969',
    party: 'Republican',
    number: 37},
    {surname:'Obama',
    name:'Barack',
    date: 'January 20, 2009',
    party: 'Democratic',
    number: 44},
    {surname:'Reagan',
    name:'Ronald',
    date: 'January 20, 1981',
    party: 'Republican',
    number: 40},
    {surname:'Trump',
    name:'Donald',
    date: 'January 20, 2017',
    party: 'Republican',
    number: 45}
];

arPresidents.sort(function(a,b){
    return a.number-b.number;
})


function fillPresidentsPF(){
    let selPres = document.getElementById('president')

    for(index in arPresidents){
        let option = document.createElement('option');
        option.value=index
        let presi=arPresidents[index]
        option.innerText=presi.surname+", "+ presi.name
        selPres.appendChild(option)
    }
}
