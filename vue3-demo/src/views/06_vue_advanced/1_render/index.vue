

<script>
import { ref, h } from 'vue'
import Header from './header.vue'
export default {
  setup() {
    const counter = ref(0)
    //1
    return () => {
      return h('div', { class: 'main' }, [
        h('h1', null, 'render'),
        h('div', null, counter.value),
        h(
          'button',
          {
            onClick: () => {
              counter.value++
            }
          },
          '+'
        ),
        h(
          Header,
          {
            counter: counter.value
          },
          {
            default: (props) => h('h2', null, `index slot props: ${props.name}`)
          }
        )
      ])
    }
  }
  //2
  //   render() {
  //     return h('div', { class: 'main' }, [h('h1', null, 'render')])
  //   }
}
</script>

<style scoped>
</style>