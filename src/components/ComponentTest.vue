<script lang="jsx">
import { ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const onClick = () => {
      counter.value++
    }
    return () => (
      <>
        <div>Jsx</div>
        <p onClick={onClick}>{counter.value}</p>
      </>
    )
  }
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // render() {
  //   return (
  //     <>
  //     <div>333</div>
  //     <p onClick={this.addCount}>{this.count}</p>
  //     </>
  //   )
  // },
  // methods: {
  //   addCount() {
  //     this.count++
  //   }
  // }
}
</script>