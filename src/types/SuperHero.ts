import { z } from "zod";
import { HeroApiSchema, ResultHeroesApiSchema, ResultsHeroeApiSchema, SearchHeroeApiSchema } from "../utils/heroes-schema";

export type Search = z.infer<typeof SearchHeroeApiSchema>
export type Result = z.infer<typeof ResultsHeroeApiSchema>
export type ResultHeroes = z.infer<typeof ResultHeroesApiSchema>
export type Hero = z.infer<typeof HeroApiSchema>