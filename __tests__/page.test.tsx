import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// MOCKS
jest.mock('@/app/components/AnimateOnScroll', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

jest.mock('@/app/components/TopIcons', () => ({
  __esModule: true,
  default: () => <div>TopIcons</div>,
}))

jest.mock('@/app/components/Projects', () => ({
  __esModule: true,
  default: () => <div>Projects</div>,
}))

jest.mock('@/app/components/Skills', () => ({
  __esModule: true,
  default: () => <div>Skills</div>,
}))
 
describe('Home', () => {
  it('renders title', () => {
    render(<Home />)
    const title = screen.getByText('Simon Di Leo')
    
    expect(title).toBeInTheDocument()
  })
})