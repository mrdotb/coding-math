console.log('sin wave')

window.onload = function() {
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight

  //Sin wave
  let speed = 0.05
  let velocity = 0

  function render() {
    velocity += speed
    console.log('render')
    ctx.clearRect(0, 0, width, height)
    for (var angle = 0; angle < Math.PI * 2; angle += .01) {
      ctx.beginPath()
      let x = angle * 200
      let y = Math.sin(angle + velocity) * 200 + height / 2

      ctx.arc(x, y, 5, 0, Math.PI * 2, false)
      ctx.fillStyle = 'gold'
      ctx.fill();
    }

    requestAnimationFrame(render)
  }

  render()
}
