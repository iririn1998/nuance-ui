import React, { createRef } from 'react';
import { describe, it, expectTypeOf } from 'vitest';

import { NuActionIcon, NuAvatar, NuBadge, NuButton, NuCard, NuCardSection, NuPaper } from '../../index';

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
});
