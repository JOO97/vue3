
<script>
export default {
  props: ['counter'],
  render() {
    return (
      <div>
        <h1>header-{this.counter}</h1>
        {this.$slots.default ? (
          this.$slots.default()
        ) : (
          <div>header default </div>
        )}
      </div>
    )
  }
}
</script>

<style scoped>
</style>