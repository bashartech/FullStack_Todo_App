import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Organize Your Life with</span>
            <span className="block text-blue-600 mt-2">Todo App</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 sm:max-w-3xl">
            A secure, full-featured task management application that helps you stay organized and productive.
            Sign up today to start managing your tasks efficiently.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              href="/signup"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-8"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:text-lg md:px-8"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Task Management</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create, update, and organize your tasks with ease.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Secure & Private</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your data is protected with industry-standard security.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Cross-Device Sync</h3>
                <p className="mt-2 text-base text-gray-500">
                  Access your tasks from any device, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Sign Up</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create your account in seconds with email or social login.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Add Tasks</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create tasks with titles, descriptions, and due dates.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Stay Organized</h3>
                <p className="mt-2 text-base text-gray-500">
                  Mark tasks as complete and manage your productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
