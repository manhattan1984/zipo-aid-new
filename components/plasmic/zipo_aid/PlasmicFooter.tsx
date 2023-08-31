// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jDNnmx5YPsmKB7YPk2zzKj
// Component: GTSXS7f9SChX

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
import Button from "../../Button"; // plasmic-import: d_44jQYJpk3I/component

import { useScreenVariants as useScreenVariants_1DTjB6GfSzy } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: 1dTjB_6GfSZY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zipo_aid.module.css"; // plasmic-import: jDNnmx5YPsmKB7YPk2zzKj/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: GTSXS7f9SChX/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 7yH6DmHHOYpf/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: BiYSEID0kU5z/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultFooterProps {
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

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uzIz)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__krxYm)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mILsI)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__q9A25)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gHvW4
                  )}
                >
                  {"Zipo Aid"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2DK2Z
                  )}
                >
                  {"Invest in Your Future with Confidence"}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__ycNbm)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rrv9U)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dvYUo
                )}
              >
                {"main menu"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__e8Tee)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__tSnf4)}
                    role={"img"}
                  />
                }
                link={`/`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__cs7Ak)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vJiP
                  )}
                >
                  {"Home"}
                </div>
              </Button>
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={`/about`}
                platform={"nextjs"}
              >
                <Button
                  color={"clear" as const}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__geNiS)}
                      role={"img"}
                    />
                  }
                  size={"minimal" as const}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___7VoL)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___70CRv
                    )}
                  >
                    {"About"}
                  </div>
                </Button>
              </p.PlasmicLink>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column___1Iwt)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___1WdQ)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qhQe
                )}
              >
                {"Support"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__ljKRu)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__b5Znu)}
                    role={"img"}
                  />
                }
                link={`/contact`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg___1AKwj)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__abeHo
                  )}
                >
                  {"Contact"}
                </div>
              </Button>
              <Button
                className={classNames("__wab_instance", sty.button___1GNr3)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__vsssr)}
                    role={"img"}
                  />
                }
                link={`/plans`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__m0JeC)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__v6L15
                  )}
                >
                  {"Plans"}
                </div>
              </Button>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column___3Yfn1)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ooQju)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wQgMy
                )}
              >
                {"Address"}
              </div>
            </p.Stack>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sErNf
              )}
            >
              {"15 Railway Street \nAntrim BT41 4AE UK"}
            </div>
          </div>
        </p.Stack>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eAIz
          )}
        >
          {"Copyright \u00a9 2023 Zipo Aid."}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "link"],
  columns: ["columns", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */