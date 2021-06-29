const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const func = async () => {
  console.log(1)
  await sleep(2000)
  console.log(2)
}

func()
