"use client";

import cn from "classnames";
import "./styles.css";

const variantConfig = {
  h1: {
    tag: "h1",
    className: "title",
  },
  h2: {
    tag: "h2",
    className: "subtitle",
  },
  h3: {
    tag: "h3",
    className: "subtitle2",
  },
  p: {
    tag: "p",
    className: "text",
  },
};

export const ProductTypography = ({ text, variant = "p" }) => {
  const { tag: Tag, className } = variantConfig[variant] || variantConfig.h1;

  return <Tag className={cn("title", className)}>{text}</Tag>;
};
