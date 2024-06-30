"use client";

import React from "react";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../ui/cta-button";

import EidoGoViewer from "@/app/_components/eidogo/EidogoViewer";

const components = { Button, EidoGoViewer };

const ClientMDXRemote = (props: MDXRemoteSerializeResult) => (
  <MDXRemote {...props} components={components} />
);

export default ClientMDXRemote;
