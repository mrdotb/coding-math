window.onload = function() {
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight

  let speed = 0.05
  let velocity = 0
    ctx.font = '22px serif';

  function render() {
    velocity += speed
    ctx.clearRect(0, 0, width, height)

    ctx.fillStyle = 'gold'
    ctx.fillText('Sin wave', 10, 50)

    ctx.fillStyle = 'blue'
    ctx.fillText('Cos wave', 10, 80)

    for (var angle = 0; angle < Math.PI * 2; angle += .01) {
      ctx.beginPath()
      let x = angle * 100
      let y = Math.sin(angle + velocity) * 100 + height / 2

      ctx.arc(x, y, 5, 0, Math.PI * 2, false)
      ctx.fillStyle = 'gold'
      ctx.fill();
    }

    for (var angle = 0; angle < Math.PI * 2; angle += .01) {
      ctx.beginPath()
      let x = angle * 100
      let y = Math.cos(angle + velocity) * 100 + height / 2

      ctx.arc(x, y, 5, 0, Math.PI * 2, false)
      ctx.fillStyle = 'blue'
      ctx.fill();
    }



    requestAnimationFrame(render)
  }

  render()
}
