export default function (app) {
    let formatStr = 'YYYY-MM-DD HH:mm:ss'
    app.directive('format-time', {
        created(el, bindings) {
            console.log('format-time created')
            console.log('bindings', bindings)
            if (bindings.value) {
                formatStr = bindings.value
            }
        },
        mounted(el) {
            console.log('format-time mounted')
            const text = el.textContent
            console.log(formatStr)
            el.textContent = 'joo'

        },
    })
}