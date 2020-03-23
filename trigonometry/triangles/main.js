window.onload = function() {
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  let halfWidth = width / 2
  let halfHeight = height / 2

  function render() {
    ctx.clearRect(0, 0, width, height)

    // Draw Grid
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.lineWidth = 1
    ctx.moveTo(0, halfHeight)
    ctx.lineTo(width, halfHeight)
    ctx.moveTo(halfWidth, 0)
    ctx.lineTo(halfWidth, height)
    ctx.stroke()
    ctx.closePath()

    let radius = 200
    let angle = 0
    let triangleNumber = 12
    let slice = Math.PI * 2 / triangleNumber

    ctx.beginPath()
    ctx.moveTo(halfWidth, halfHeight)
    ctx.arc(halfWidth, halfHeight, radius, 0, Math.PI * 2, false)
    ctx.stroke()
    ctx.closePath()

    for (let i = 0; i < triangleNumber; i++) {
      angle = i * slice
      x = halfWidth + Math.cos(angle) * radius
      y = halfHeight + Math.sin(angle) * radius

       let triangle = [
        [halfWidth, halfHeight],
        [x, halfHeight],
        [x, y],
      ]

      drawTriangle(ctx, triangle)

      // ctx.moveTo(x, y)
      // ctx.arc(x, y, 10, 0, Math.PI * 2, false)
      // ctx.fill()
      // ctx.closePath()
    }

    //ctx.moveTo(halfWidth, 0)
    //ctx.lineTo(halfWidth, 100)

    //requestAnimationFrame(render)
    //
  }

  render()
}

function drawTriangle(ctx, triangle) {
  let [a, b, c] = triangle
  console.log(triangle)

  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = 'blue';
  ctx.moveTo(a[0], a[1])
  ctx.lineTo(b[0], b[1])
  ctx.lineTo(c[0], c[1])
  ctx.lineTo(a[0], a[1])
  ctx.stroke()
  ctx.closePath()
}
