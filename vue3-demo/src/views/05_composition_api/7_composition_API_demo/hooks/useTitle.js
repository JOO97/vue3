import {
    ref,
    watch
} from 'vue'

export function useTitle(title = 'default') {
    const titleRef = ref(title)

    watch(titleRef, (newVal) => {
        document.title = newVal
    }, {
        immediate: true
    })


    return titleRef

}