import '@testing-library/jest-dom'
import { render, screen } from '../test-utils'
import Home from '../../../src/pages/index'

describe('Given <Home />', () => {

  beforeEach(() => {
    render(<Home />)
  });

  test('Then should display hello world', () => {
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  });

});