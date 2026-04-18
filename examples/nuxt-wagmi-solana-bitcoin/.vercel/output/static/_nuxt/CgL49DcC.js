The chosen QR Code version cannot contain this amount of data.
            <rect
              fill=${l === 2 ? n : t}
              width=${l === 0 ? P - 5 : P}
              rx= ${l === 0 ? (P - 5) * g : P * g}
              ry= ${l === 0 ? (P - 5) * g : P * g}
              stroke=${n}
              stroke-width=${l === 0 ? 5 : 0}
              height=${l === 0 ? P - 5 : P}
              x= ${l === 0 ? f + u * l + 5 / 2 : f + u * l}
              y= ${l === 0 ? d + u * l + 5 / 2 : d + u * l}
            />
              <line
                x1=${w}
                x2=${w}
                y1=${d}
                y2=${f}
                stroke=${n}
                stroke-width=${u / (oe / 2)}
                stroke-linecap="round"
              />
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? Je}
      <svg height=${r} width=${r}>
        ${Ke.generate({ uri: this.uri, size: r, logoSize: this.arenaClear ? 0 : r / 4, dotColor: this.color })}
      </svg>
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
