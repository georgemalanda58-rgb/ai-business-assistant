import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Malanda - Kenya Business Marketplace",
description:
"Find businesses, services, jobs and opportunities with Malanda.",
keywords: [
"Malanda",
"Kenya",
"Business",
"Marketplace",
"Directory",
"Services",
],
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <head> <meta
       name="google-site-verification"
       content="om_xl5bGGgOeDsFuvhxQ"
     /> </head>

```
  <body>{children}</body>
</html>
```

);
}
