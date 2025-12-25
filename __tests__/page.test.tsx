import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Home', () => {
  it('renders title', () => {
    render(<Page />)
 
    const title = screen.getByText('Simon Di Leo')
 
    expect(title).toBeInTheDocument()
  })
})