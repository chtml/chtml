class Init {
  async run () {
    console.log('hello')
    await this.sleep(1)
    console.log('world')
  }

  sleep (delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay * 1000)
    })
  }
}

new Init().run()
