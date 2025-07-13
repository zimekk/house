declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "ral-to-hex" {
  export default function hex(t: string): string;
}
