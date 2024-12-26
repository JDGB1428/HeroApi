import { z } from "zod";

export const SearchHeroeApiSchema = z.object({
    name: z.string(),
});

export const ResultHeroesApiSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.object({
        url: z.string(),
    }),
});

export const ResultsHeroeApiSchema = z.object({
    results: z.array(ResultHeroesApiSchema),
});

export const HeroApiSchema = z.object({
    id: z.string(),
    name: z.string(),
    appearance: z.object({
        gender: z.string(),
        race: z.string(),
        height: z.array(z.string()),
        weight: z.array(z.string()),
        "eye-color": z.string(),
        "hair-color": z.string(),
    }),
    work: z.object({ occupation: z.string(), base: z.string() }),
    connections: z.object({
        "group-affiliation": z.string(),
        relatives: z.string(),
    }),
    image: z.object({ url: z.string() }),
});
