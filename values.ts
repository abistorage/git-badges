import { COLOR } from "./appearance";
import { IGenericBadge } from "./badge";

export const STATIC_DEPENDENCY: IGenericBadge = {
  label: "dependency",
  color: COLOR.Default,
  isLarge: false,
};

export const LICENSE_BADGE: IGenericBadge = {
  label: "License",
  color: COLOR.Default,
  isLarge: false,
  altText: "License",
};

export const GH_BADGE: IGenericBadge = {
  color: COLOR.Default,
  isLarge: false,
  logo: "github",
  logoColor: "",
};

export const GH_PAGES_BADGE: IGenericBadge = {
  label: "View site",
  message: "GH Pages",
  color: COLOR.Green,
  isLarge: true,
};

export const TEMPLATE_BADGE: IGenericBadge = {
  label: "Generate",
  message: "Use this template",
  color: COLOR.Green,
  isLarge: true,
  altText: "Use this template",
};

export const SOLIDITY_VERSION_BADGE = {
    IS_LARGE: false,
  };

export const VYPER_VERSION_BADGE = {
    IS_LARGE: false,
  };

export const NODE_VERSION_BADGE = {
  IS_LARGE: false,
};

export const GO_MODULE_SHIELD = {
  isLarge: false,
  logo: "go",
  logoColor: "white",
  linkTarget: "https://golang.org",
  altText: "Made with Go",
};