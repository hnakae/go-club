"use client";

import React from "react";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Button from "../ui/cta-button";

const components = { Button };

const ClientMDXRemote = (props: MDXRemoteSerializeResult) => (
  <MDXRemote {...props} components={components} />
);

export default ClientMDXRemote;
