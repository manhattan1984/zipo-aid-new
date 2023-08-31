// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jDNnmx5YPsmKB7YPk2zzKj
// Component: ouBp1CU0Dav7

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

import { useScreenVariants as useScreenVariants_1DTjB6GfSzy } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: 1dTjB_6GfSZY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zipo_aid.module.css"; // plasmic-import: jDNnmx5YPsmKB7YPk2zzKj/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: ouBp1CU0Dav7/css

createPlasmicElementProxy;

export type PlasmicAbout__VariantMembers = {};
export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
};

export interface DefaultAboutProps {}

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

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariants_1DTjB6GfSzy()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAbout.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAbout.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAbout.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
        <section
          data-plasmic-name={"section"}
          data-plasmic-override={overrides.section}
          className={classNames(projectcss.all, sty.section)}
          id={"about" as const}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ok5Cj)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qjs4E)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dqHCo
                )}
              >
                {"About Us"}
              </div>
            </div>
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__avZon)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lxBte)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xdd1F
                    )}
                  >
                    {"Our Vision"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__glbH
                    )}
                  >
                    {
                      "Welcome to Zipo Aid, where we envision a world where financial possibilities are illuminated for everyone. Our journey began with the belief that every individual deserves a chance to achieve their financial dreams. We are here to guide you through the complexities of investment, ensuring that your path is bright, clear, and full of potential."
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jJcSk)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zr8Kj
                    )}
                  >
                    {"Our Mission"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eDZwg
                    )}
                  >
                    {
                      "Our mission is simple yet profound: to empower you with intelligent investment choices that lead to financial freedom. We believe that by providing expert insights and innovative strategies, we can help you navigate the ever-changing landscape of finance and create a future that's as vibrant as our name suggests."
                    }
                  </div>
                </p.Stack>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__relzg
                  )}
                >
                  {"Invest with Clarity. Choose Zipo Aid."}
                </div>
              </p.Stack>
            ) : null}
          </p.Stack>
        </section>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section"],
  section: ["section"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAbout__ArgsType,
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "About",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
