import React, { createRef } from 'react';
import { describe, it, expectTypeOf } from 'vitest';

import {
  NuActionIcon,
  NuAppShellSection,
  NuAvatar,
  NuBadge,
  NuButton,
  NuCard,
  NuCardSection,
  NuPaper,
} from '../../index';

describe('Polymorphic component type checks', () => {
  it('NuPaper accepts children, polymorphic anchor props, and ref types', () => {
    const divRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = <NuPaper ref={divRef}>Hello</NuPaper>;
    const anchorElement = (
      <NuPaper component="a" href="https://example.com" target="_blank" ref={anchorRef}>
        Anchor
      </NuPaper>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuButton accepts polymorphic anchor props and ref types', () => {
    const btnRef = createRef<HTMLButtonElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = <NuButton ref={btnRef}>Button</NuButton>;
    const anchorElement = (
      <NuButton component="a" href="https://example.com" ref={anchorRef}>
        Link
      </NuButton>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuActionIcon accepts polymorphic anchor props and ref types', () => {
    const btnRef = createRef<HTMLButtonElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = <NuActionIcon ref={btnRef}>Icon</NuActionIcon>;
    const anchorElement = (
      <NuActionIcon component="a" href="https://example.com" ref={anchorRef}>
        Icon Link
      </NuActionIcon>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuBadge accepts polymorphic anchor props and ref types', () => {
    const divRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = <NuBadge ref={divRef}>Badge</NuBadge>;
    const anchorElement = (
      <NuBadge component="a" href="https://example.com" ref={anchorRef}>
        Badge Link
      </NuBadge>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuAvatar accepts polymorphic anchor props and ref types', () => {
    const divRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = <NuAvatar ref={divRef} src="avatar.png" />;
    const anchorElement = <NuAvatar component="a" href="https://example.com" ref={anchorRef} src="avatar.png" />;

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuCard and NuCardSection accept polymorphic anchor props and ref types', () => {
    const divRef = createRef<HTMLDivElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    const defaultElement = (
      <NuCard ref={divRef}>
        <NuCardSection>Section</NuCardSection>
      </NuCard>
    );
    const anchorElement = (
      <NuCard component="a" href="https://example.com" ref={anchorRef}>
        <NuCardSection component="header">Section Header</NuCardSection>
      </NuCard>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(anchorElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('NuAppShellSection accepts polymorphic props and ref types', () => {
    const divRef = createRef<HTMLDivElement>();
    const sectionRef = createRef<HTMLElement>();

    const defaultElement = <NuAppShellSection ref={divRef}>Section</NuAppShellSection>;
    const sectionElement = (
      <NuAppShellSection component="section" ref={sectionRef}>
        Section Element
      </NuAppShellSection>
    );

    expectTypeOf(defaultElement).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(sectionElement).toEqualTypeOf<React.JSX.Element>();
  });

  it('rejects invalid props and mismatched refs with compile-time type errors', () => {
    const divRef = createRef<HTMLDivElement>();
    const btnRef = createRef<HTMLButtonElement>();
    const anchorRef = createRef<HTMLAnchorElement>();

    // @ts-expect-error href is not allowed on default div NuPaper
    const _invalidPropOnPaper = <NuPaper href="https://example.com" />;

    // @ts-expect-error HTMLButtonElement ref is not valid when component="a"
    const _mismatchedRefOnAnchorButton = <NuButton component="a" ref={btnRef} />;

    // @ts-expect-error HTMLAnchorElement ref is not valid on default button NuButton
    const _mismatchedRefOnDefaultButton = <NuButton ref={anchorRef} />;

    // @ts-expect-error href is not allowed on default button NuButton
    const _invalidPropOnButton = <NuButton href="https://example.com" />;

    // @ts-expect-error HTMLDivElement ref is not valid when component="a" on NuPaper
    const _mismatchedRefOnAnchorPaper = <NuPaper component="a" ref={divRef} />;

    // @ts-expect-error href is not allowed on default div NuAppShellSection
    const _invalidPropOnSection = <NuAppShellSection href="https://example.com" />;

    // @ts-expect-error HTMLDivElement ref is not valid when component="a" on NuAppShellSection
    const _mismatchedRefOnAnchorSection = <NuAppShellSection component="a" ref={divRef} />;

    expectTypeOf(_invalidPropOnPaper).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_mismatchedRefOnAnchorButton).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_mismatchedRefOnDefaultButton).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_invalidPropOnButton).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_mismatchedRefOnAnchorPaper).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_invalidPropOnSection).toEqualTypeOf<React.JSX.Element>();
    expectTypeOf(_mismatchedRefOnAnchorSection).toEqualTypeOf<React.JSX.Element>();
  });
});
