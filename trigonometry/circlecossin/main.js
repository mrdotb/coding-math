window.onload = function() {
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  let halfWidth = width / 2
  let halfHeight = height / 2
  let oneThird = width / 3
  let gridCenterX = width - halfHeight
  const PI2 = Math.PI * 2
  let angle = 0
  let speed = 0.05

  function render() {
    ctx.clearRect(0, 0, width, height)

    if (angle > 2 * Math.PI) {
      angle = 0
    }

    angle += speed

    let radius = halfHeight / 2 * 80 / 100
    let cercleCenter = [
      gridCenterX + halfHeight / 2,
      halfHeight + halfHeight / 2
    ]

    // Math
    let x = Math.cos(angle)
    let y = Math.sin(angle)
    let xOnCercle = x * radius + cercleCenter[0]
    let yOnCercle = y * radius + cercleCenter[1]

    ctx.font = '20px serif';

    ctx.fillStyle = 'lightblue'
    ctx.fillText('Sin wave', 30, 28)

    ctx.fillStyle = 'crimson'
    ctx.fillText('Cos wave', 30, halfHeight + 28)
    addStyles({fillStyle: 'reset'})


    // Draw Grid
    drawLine(
      ctx,
      [[0, halfHeight], [width, halfHeight]],
      {strokeStyle: "grey"}
    )
    drawLine(
      ctx,
      [[gridCenterX, 0], [gridCenterX, height]],
      {strokeStyle: "grey"}
    )
    drawLine(
      ctx,
      [[cercleCenter[0], cercleCenter[1]], [xOnCercle, yOnCercle]],
      {strokeStyle: 'lightgreen',}
    )
    drawLine(
      ctx,
      [[xOnCercle, yOnCercle], [xOnCercle, halfHeight]],
      {strokeStyle: 'skyblue',}
    )
    drawCircle(
      ctx,
      [xOnCercle, halfHeight, radius / 25, 0, PI2, false],
      { fillStyle: 'skyblue', }
    )

    drawLine(
      ctx,
      [[xOnCercle, yOnCercle], [gridCenterX, yOnCercle]],
      { strokeStyle: 'crimson', }
    )
    drawCircle(
      ctx,
      [gridCenterX, yOnCercle, radius / 25, 0, PI2, false],
      { fillStyle: 'crimson' }
    )
    drawCircle(
      ctx,
      [gridCenterX, halfHeight, ((width - halfHeight - xOnCercle) * -1), PI2 * 75 / 100, PI2, false],
      { strokeStyle: 'skyblue' }
    )
    drawCircle(
      ctx,
      [gridCenterX, halfHeight + ((width - halfHeight - xOnCercle)), radius / 25, 0, PI2, false],
      { fillStyle: 'skyblue' }
    )

    // Main Circle
    drawCircle(
      ctx,
      [cercleCenter[0], cercleCenter[1], radius, 0, PI2, false],
      { strokeStyle: 'lightgreen', }
    )
    drawCircle(
      ctx,
      [cercleCenter[0], cercleCenter[1], radius / 25, 0, PI2, false],
      { strokeStyle: 'orange', fillStyle: 'orange', }
    )
    drawCircle(
      ctx,
      [cercleCenter[0], cercleCenter[1], radius / 5, 0, angle, false],
      { strokeStyle: 'orange', }
    )
    drawCircle(
      ctx,
      [xOnCercle, yOnCercle, radius / 25, 0, PI2, false],
      { fillStyle: 'lightgreen', }
    )

    // cos wave
    ctx.beginPath()
    for (let i = 0; i < Math.PI * 2; i += speed) {
      let xx = i * gridCenterX / (Math.PI * 2)
      let xxOnCercle = Math.cos(angle + i) * radius + cercleCenter[0]
      let yy = halfHeight + (width - halfHeight - xxOnCercle)

      ctx.lineTo(xx, yy)
    }
    addStyles(ctx, { lineWidth: 5, strokeStyle: 'skyblue' })
    ctx.closePath()

    // sin wave
    ctx.beginPath()
    for (let i = 0; i < Math.PI * 2; i += speed) {
      let xx = i * gridCenterX / (Math.PI * 2)
      let yy = Math.sin(angle + i) * radius + cercleCenter[1]

      ctx.lineTo(xx, yy)
    }
    addStyles(ctx, { lineWidth: 5, strokeStyle: 'crimson' })
    ctx.closePath()

    requestAnimationFrame(render)
  }

  render()
}

function drawCircle(ctx, params, styles) {
  ctx.beginPath()
  ctx.arc(...params)
  addStyles(ctx, styles)
  ctx.closePath()
}

function drawLine(ctx, positions, styles) {
  ctx.beginPath()
  ctx.moveTo(positions[0][0], positions[0][1])
  for (let i = 1; i < positions.length; i++) {
    ctx.lineTo(positions[i][0], positions[i][1])
  }
  addStyles(ctx, styles)
  ctx.closePath()
}

function addStyles(ctx, styles) {
  for (const property in styles) {
    ctx[property] = styles[property]
    if (property === 'strokeStyle') {
      ctx.stroke()
      ctx.strokeStyle = '#000'
    } else if (property === 'fillStyle') {
      ctx.fill() 
      ctx.fillStyle = '#000'
    } else if (property === 'lineWidth') {
      ctx.lineWidth = 1
    }
  }
}
