import Head from 'next/head'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import styles from '../styles/Home.module.css'

export const config = { amp: true };
export default function Home() {
  return (
    <div>
      <Head>
        <title>AMP News</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main>
	    <p>List of Members ref  ==== <a href="https://amp.dev/documentation/components/amp-list/?format=websites#initialization-from-amp-state">https://amp.dev/documentation/components/amp-list/?format=websites#initialization-from-amp-state</a></p>
		
		<amp-list
			width="auto"
			height="80"
			src="/api/hello"
			layout='fixed-height'
		  >
		  
		  <template type="amp-mustache">
			<p>{`{{ name }}`} </p>
		  </template>
	  </amp-list>

      </main>
    </div>
  );
}
