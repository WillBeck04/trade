import Head from 'next/head';
import Link from 'next/link';

export default function ChartAnalysis() {
  return (
    <>
      <Head>
        <title>Chart Analysis - Apple Stock | William Beck</title>
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
              Chart Analysis of Apple Inc. Stock
            </h1>
            <p className="text-xl text-center">
              Detailed Insights & Patterns
            </p>
          </header>

          {/* Main Content */}
          <section className="mb-10">
            {/* Image */}
            <div className="text-center my-8">
              <img src="/image3.png" alt="Chart Analysis" className="mx-auto h-80 w-90 rounded" />
            </div>

            {/* Chart Analysis Content */}
            <h2 className="text-3xl font-semibold mb-3">Technical Analysis Overview</h2>
            <p className="mb-6">
            The chart shows a clear line where Apple's stock seems to stop dropping and starts to pick up again. This is the support line, and it's like a safety net; every time the stock hits this line, it finds enough buyers to start rising again. This repeated bounce back from the support line tells us that investors feel pretty good about buying at this level. If everything else in the market stays steady and people keep believing in Apple's value, this line could help the stock's price go up tomorrow bomboclatttttttt me getting rich and buy escorts. Also, notice the last green bar at the bottom of the chart going up, this means hugeee volume which is really good as well.
            </p>

            {/* More Content */}
           

            {/* Additional Sections as Desired */}
            {/* ... additional content ... */}

          </section>

          <footer className="text-center border-t pt-8 mt-8">
            <p>© {new Date().getFullYear()} William Beck. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
