function classNames(...classes) {
    return classes.reduce((out, cls) => (cls ? out + ' ' + cls : out), 
'');
}