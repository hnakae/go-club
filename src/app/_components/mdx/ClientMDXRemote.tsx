// File: app/_components/ClientMDXRemote.tsx

"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../ui/cta-button";
import ImageText from "./ImageText";
import IframeComponent from "./iframeComponent";

const components = { Button, ImageText, IframeComponent };

const ClientMDXRemote = (props: MDXRemoteSerializeResult) => (
  <MDXRemote {...props} components={components} />
);

export default ClientMDXRemote;
