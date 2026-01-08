import { z } from "zod";

export const PresetSchema = z
  .object({
    name: z.string(),
    attributes: z
      .object({
        // name: z.string(),
        // ip: z.string(),
        ip: z.enum(["IP20", "IP30", "IP65", "IP66"]).optional(),
        type: z.enum([
          "WW",
          "NW",
          "CW",
          "CCT",
          "RGB",
          "RGB_CW",
          "RGB_NW",
          "RGB_WW",
          "RGB_CCT",
        ]),
        kind: z.enum(["FCOB_SPI", "FCOB_PWM", "SMD_SPI", "SMD_PWM"]),
        // temp: z.number(),
        volt: z.enum(["DC5V", "DC12V", "DC24V", "DC48V"]),
      })
      .extend({
        chip: z.enum(["WS2814"]).optional(),
        leds: z.number().optional(),
        power: z.number().optional(),
        length: z.number().optional(),
        width: z.number().optional(),
      }),
    // ip: z.enum(['ip20','ip65']),
  })
  .extend({
    price: z.number().optional(),
    image: z.string().optional(),
    url: z.string().optional(),
  });

export type PresetType = z.infer<typeof PresetSchema>;
