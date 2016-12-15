// src/App.test.js

import chai, { expect } from 'chai'
import App from './App'

describe('App', () => {
  const app = new App()

  it('creates 50 balloons', () => {
    expect(app.props.balloons.length).to.eq(50)
  })
})
