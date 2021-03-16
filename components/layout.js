import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };
  return (
    <>
      <style jsx global>
        {`
          a {
            text-decoration: none !important;
            cursor: pointer;
            color: #0070f3;
          }
          a:hover {
            color: #0366d6;
          }
          body {
            margin: 0;
            padding: 0;
            color: #111;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            background-color: #fff;
          }
          h2 {
            color: #333;
            text-align: center;
          }
          label {
            display: flex;
            margin-bottom: 0.5rem;
            align-items: center;
            width: 100%;
          }
          form {
            margin-bottom: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          input,
          textarea {
            font-family: monospace;
            flex: 1 1 0%;
            margin-left: 0.5rem;
            box-shadow: none;
            width: 100%;
            color: #000;
            background-color: transparent;
            border: 1px solid #d8d8d8;
            border-radius: 5px;
            outline: 0px;
            padding: 10px 25px;
          }
          header {
            border-bottom: 1px solid #d8d8d8;
          }
          nav {
            max-width: 98%;
            margin: auto;
            padding: 1rem 2rem;
          }
          nav div {
            float: right;
          }
          nav div a {
            font-size: 0.9rem;
            margin-left: 1rem;
          }
          nav h1 {
            font-size: 1rem;
            color: #444;
            margin: 0;
            font-weight: 700;
            float: left;
          }
          nav:after {
            content: '';
            clear: both;
            display: table;
          }
          main {
            padding: 1rem;
            margin: 0 auto;
          }
          footer {
            text-align: center;
            font-size: 0.8rem;
            margin-top: 1rem;
            padding: 3rem;
            color: #888;
          }
        `}
      </style>
      <Head>
        <title>Test</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Test"
        />
        <meta property="og:title" content="Indian Stock Market IPO Dashboard IPO Tracking" />
        <meta
          property="og:description"
          content="test"
        />
        <meta
          property="og:image"
          content="test"
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>
              <h1>IPO App</h1>
            </a>
          </Link>
          <div>
            {"!user" ? (
              <>
                <Link href="/home">
                  <a>All IPOs</a>
                </Link>
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>
              </>
            ) : (
                <>
                  <Link href={`/user/${user._id}`}>
                    <a>Profile</a>
                  </Link>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a tabIndex={0} role="button" onClick={handleLogout}>
                    Logout
                </a>
                </>
              )}
          </div>
        </nav>
      </header>
      <main className="px-5">{children}</main>
      <footer>
        Footer DEV in progress
      </footer>
    </>
  );
};
