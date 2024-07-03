// File: app/_components/ClientMDXRemote.tsx

"use client";

import dynamic from "next/dynamic";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../ui/cta-button";
import ImageText from "./ImageText";

const EidoGoViewer = dynamic(() => import("../eidogo/EidogoViewer"), {
  ssr: false,
});

const components = { Button, EidoGoViewer, ImageText };

const ClientMDXRemote = (props: MDXRemoteSerializeResult) => (
  <MDXRemote {...props} components={components} />
);

export default ClientMDXRemote;
