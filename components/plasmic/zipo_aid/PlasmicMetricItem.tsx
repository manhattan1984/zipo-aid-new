// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jDNnmx5YPsmKB7YPk2zzKj
// Component: fEz0PE6Ev5aO

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zipo_aid.module.css"; // plasmic-import: jDNnmx5YPsmKB7YPk2zzKj/projectcss
import sty from "./PlasmicMetricItem.module.css"; // plasmic-import: fEz0PE6Ev5aO/css

createPlasmicElementProxy;

export type PlasmicMetricItem__VariantMembers = {};
export type PlasmicMetricItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicMetricItem__VariantsArgs;
export const PlasmicMetricItem__VariantProps = new Array<VariantPropType>();

export type PlasmicMetricItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMetricItem__ArgsType;
export const PlasmicMetricItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicMetricItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMetricItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMetricItem__RenderFunc(props: {
  variants: PlasmicMetricItem__VariantsArgs;
  args: PlasmicMetricItem__ArgsType;
  overrides: PlasmicMetricItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__yrRdO)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zf9Gh
              )}
            >
              <React.Fragment>
                <React.Fragment>{"$100M"}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#00CCCC" }}
                >
                  {"+"}
                </span>
              </React.Fragment>
            </div>
          ),
          value: args.children
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___472De)}>
        {p.renderPlasmicSlot({
          defaultContents: "in managed assets",
          value: args.slot
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMetricItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMetricItem__VariantsArgs;
    args?: PlasmicMetricItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMetricItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMetricItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMetricItem__ArgProps,
          internalVariantPropNames: PlasmicMetricItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMetricItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMetricItem";
  } else {
    func.displayName = `PlasmicMetricItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMetricItem = Object.assign(
  // Top-level PlasmicMetricItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMetricItem
    internalVariantProps: PlasmicMetricItem__VariantProps,
    internalArgProps: PlasmicMetricItem__ArgProps
  }
);

export default PlasmicMetricItem;
/* prettier-ignore-end */
