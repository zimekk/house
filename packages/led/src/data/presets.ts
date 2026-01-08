import { type PresetType } from "../schema";

export const presets: PresetType[] = [
  {
    name: "Taśma LED na tarasie",
    attributes: {
      type: "NW",
      kind: "FCOB_PWM",
      volt: "DC24V",
      ip: "IP65",
    },
  },
  {
    name: "[1]++ Taśma LED w korytarzu",
    attributes: {
      type: "WW",
      kind: "FCOB_SPI",
      volt: "DC24V",
      ip: "IP20",
    },
  },
  {
    name: "[2]++ Taśma LED na górze",
    attributes: {
      type: "RGB_CCT",
      kind: "FCOB_SPI",
      volt: "DC24V",
      ip: "IP20",
    },
  },
  {
    name: "[3]+ Taśma LED w garderobie",
    attributes: {
      type: "NW",
      kind: "FCOB_PWM",
      volt: "DC24V",
      ip: "IP20",
    },
  },
  {
    name: "Taśma LED w łazience",
    attributes: {
      type: "NW",
      kind: "FCOB_PWM",
      volt: "DC24V",
      ip: "IP65",
    },
  },
  {
    name: "[4]+ Taśma LED w kuchni",
    attributes: {
      type: "CCT",
      kind: "FCOB_PWM",
      volt: "DC24V",
      ip: "IP65",
    },
  },
];
