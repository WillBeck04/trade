import Head from 'next/head';
import Link from 'next/link';

export default function AppleStockAnalysis() {
  return (
    <>
      <Head>
        <title>Apple Inc. Stock Analysis by William Beck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white text-gray-700">
        <div className="container mx-auto px-8 py-16 min-h-screen">

          {/* Navigation Bar */}
          <nav className="mb-8">
            <ul className="flex justify-center space-x-4">
              <li><Link href="/Chart"><button className="text-blue-600 hover:underline">Chart Analysis</button></Link></li>
              <li><Link href="/"><button className="text-blue-600 hover:underline">Fundamental Analysis</button></Link></li>
            </ul>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-center mb-4">
              Apple Inc. Stock Analysis
            </h1>
            <p className="text-xl text-center">
              by William Beck
            </p>
          </header>

          {/* Main Content */}
          <section className="mb-10">
            {/* Existing Content */}
            {/* ... existing sections ... */}

            {/* Small Image with Round Corners */}
            <div className="text-center my-8">
              <img src="/image1.png" alt="Relevant Image" className="mx-auto h-60 w-100 rounded" />
            </div>

            {/* Additional Dynamic Content */}
           
            

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-3">Introduction</h2>
            <p className="mb-6">
            Goldman Sachs is going back to basics, concentrating on areas where they've always been strong like trading and helping companies manage their money. They're stepping away from their big deal with Apple.
            </p>

            <h2 className="text-3xl font-semibold mb-3">Analysis</h2>
            <p className="mb-6">
            This move may indicate that Apple is choosing to concentrate on its most profitable and successful areas, like its core technology products and services, which have historically driven its growth. Ending the partnership could allow Apple to reallocate resources and strategic focus towards these main revenue-generating segments. This could also represent a strategic shift or a pause in Apple's broader financial services ambitions, suggesting a more cautious approach as it reassesses its position in this sector.
            </p>

            <h2 className="text-3xl font-semibold mb-3">Why Apple Stock May Rise</h2>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Refocus on High-Margin Products:</strong> Apple's hardware products, like the iPhone and Mac, have higher profit margins than financial services. A refocus on these areas could boost profitability.</li>
              <li><strong>Innovative Pipeline:</strong> Apple's commitment to innovation often leads to new product categories and service expansions, driving revenue growth.</li>
              <li><strong>Brand Loyalty and Ecosystem:</strong> Apple's robust ecosystem locks in customers, leading to repeat sales and a steady revenue stream from its services division.</li>
              <li><strong>Financial Realignment:</strong> Exiting less profitable or strategically divergent ventures like the Goldman Sachs partnership could improve Apple's financials over the long term.</li>
            </ul>
            

            <h2 className="text-3xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-6">
            Apple's potential decision to end its credit card agreement with Goldman Sachs could serve as a strategic advantage, reinforcing its commitment to core business areas where it has established market leadership. This reorientation towards its foundational products and innovative services like the iPhone, Mac, etc, could streamline Apple's focus and optimize profits. 
            </p>
            

            <div className="mt-8">
              <Link href="https://www.tradingview.com/symbols/NASDAQ-AAPL/">
                <button className="text-blue-600 hover:underline"  rel="noopener noreferrer">
                  Visit TradingView for interactive Apple stock charts
                </button>
              </Link>
            </div>

            {/* More Content as Needed */}
            {/* ... additional sections ... */}

          </section>
          </section>

          <footer className="text-center border-t pt-8 mt-8">
            <p>© {new Date().getFullYear()} William Beck. All rights reserved.</p>
          </footer>
        </div>
      </div>
      
    </>
  );
}
