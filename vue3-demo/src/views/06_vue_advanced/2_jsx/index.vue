

<script>
import Header from './header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      counter: 0
    }
  },
  render() {
    const increment = () => {
      this.counter++
    }
    return (
      <div>
        <h1>JSX</h1>
        <div>
          {this.counter}
          <button onClick={increment}>+</button>
        </div>
        <Header counter={this.counter}>
          <span>content from index</span>
        </Header>
      </div>
    )
  }
}
</script>

<style scoped>
</style>