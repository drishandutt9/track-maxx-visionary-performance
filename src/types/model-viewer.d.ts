declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'disable-zoom'?: boolean | string;
        'disable-pan'?: boolean | string;
        'disable-tap'?: boolean | string;
        'interaction-prompt'?: string;
        'camera-orbit'?: string;
        'camera-target'?: string;
        'field-of-view'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'environment-image'?: string;
        exposure?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'animation-name'?: string;
        autoplay?: boolean | string;
        loading?: string;
        reveal?: string;
        poster?: string;
        tone-mapping?: string;
      },
      HTMLElement
    >;
  }
}
