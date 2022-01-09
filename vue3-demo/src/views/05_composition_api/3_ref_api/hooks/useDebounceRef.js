import {
    customRef
} from "vue";

export function useDebounceRef(value) {
    let timer
    return customRef((track, trigger) => {
        return {
            get() {
                track() //收集依赖
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newVal
                    trigger()
                }, 1000)

            }
        }
    })
}