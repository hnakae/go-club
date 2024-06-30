// File: app/_components/ClientMDXRemote.tsx

"use client";

import dynamic from "next/dynamic";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../ui/cta-button";

const EidoGoViewer = dynamic(() => import("../eidogo/EidogoViewer"), {
  ssr: false,
});

const components = { Button, EidoGoViewer };

const ClientMDXRemote = (props: MDXRemoteSerializeResult) => (
  <MDXRemote {...props} components={components} />
);

export default ClientMDXRemote;
