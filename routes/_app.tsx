import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        <link
          rel="preconnect"
          href={asset("MuseoSans-100.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-100Italic.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-300.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-300Italic.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-500.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-500Italic.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-700.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-700Italic.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-900.otf")}
          as="font"
          type="font/otf"
        />
        <link
          rel="preconnect"
          href={asset("MuseoSans-900Italic.otf")}
          as="font"
          type="font/otf"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face {
                      font-family: 'Museo Sans';
                      font-style: normal;
                      font-weight: 100;
                      font-display: swap;
                      src: url(${
              asset("MuseoSans-100.otf")
            }) format('opentype');
                    }

                    @font-face {
                      font-family: 'Museo Sans';
                      font-style: normal;
                      font-weight: 300;
                      font-display: swap;
                      src: url(${
              asset("MuseoSans-300.otf")
            }) format('opentype');
                    }

                    @font-face {
                      font-family: 'Museo Sans';
                      font-style: normal;
                      font-weight: 500;
                      font-display: swap;
                      src: url(${
              asset("MuseoSans-500.otf")
            }) format('opentype');
                    }

                    @font-face {
                      font-family: 'Museo Sans';
                      font-style: normal;
                      font-weight: 700;
                      font-display: swap;
                      src: url(${
              asset("MuseoSans-700.otf")
            }) format('opentype');
                    }

                    @font-face {
                      font-family: 'Museo Sans';
                      font-style: normal;
                      font-weight: 100;
                      font-display: swap;
                      src: url(${
              asset("MuseoSans-900.otf")
            }) format('opentype');
                    }
                      
                    * {
                      font-family: 'Museo Sans', sans-serif  
                    }
                    `,
          }}
        />

        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXCP9QB');
    `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* LinkedIn Pixel */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
      _linkedin_partner_id = "1241034";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `,
          }}
        />

        <script
          type="text/javascript"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          async
        >
        </script>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1241034&fmt=gif" />`,
          }}
        />

        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      !function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
        ttq.setAndDefer = function(t, e) {
          t[e] = function() {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        };
        for (var i = 0; i < ttq.methods.length; i++) {
          ttq.setAndDefer(ttq, ttq.methods[i]);
        }
        ttq.instance = function(t) {
          var e = ttq._i[t] || [];
          for (var n = 0; n < ttq.methods.length; n++) {
            ttq.setAndDefer(e, ttq.methods[n]);
          }
          return e;
        };
        ttq._i = {};
        ttq.load = function(e, n) {
          var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          ttq._i[e] = [];
          ttq._i[e]._u = i;
          ttq._t = ttq._t || {};
          ttq._t[e] = +new Date;
          ttq._o = ttq._o || {};
          ttq._o[e] = n || {};
          var a = d.createElement("script");
          a.type = "text/javascript";
          a.async = true;
          a.src = i + "?sdkid=" + e + "&lib=" + t;
          var s = d.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(a, s);
        };
        ttq.load("CATN8D3C77U5NQUHEE30");
        ttq.page();
      }(window, document, "ttq");
    `,
          }}
        />

        {/* Meta (Facebook) Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1458020004516977');
      fbq('track', 'PageView');
    `,
          }}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html:
              `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1458020004516977&ev=PageView&noscript=1" />`,
          }}
        />
        {/* CSS do Leaflet */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />

        {/* Script do Leaflet */}
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""
        >
        </script>
      </Head>

      {/* Rest of Preact tree */}
      <>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXCP9QB"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <ctx.Component />
      </>
    </>
  );
});
