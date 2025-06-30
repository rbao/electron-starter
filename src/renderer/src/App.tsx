import { Card, CardContent } from '@/components/ui/card'

function App(): React.JSX.Element {
  return (
    <div className="h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Starter Template</h1>

        <Card className="shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-gray-600">Hello World</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
