import type { Logger } from 'pino';
import { getAIModule, type AIModule } from '~/layers/ai/server/ai.module';
import { getHealthModule, type HealthModule } from '~/layers/health/server/health.module';
import { getLoggerModule } from '~/layers/log/server/logger.module';
import { getMongoModule } from '~/layers/mongo/server/mongo.module';
import { getOpenAIModule } from '~/layers/openai/server/openai.module';
import { getPaletteModule, type PaletteModule } from '~/layers/palette/server/palette.module';

interface Modules {
  ai: AIModule
  logger: Logger
  health: HealthModule
  palette: PaletteModule
}

export let modules: Modules;

export let isModulesReady = false;

export async function setup(): Promise<void> {
  const logger = getLoggerModule();

  try {
    const mongodb = getMongoModule(logger);

    logger.info('connecting to configured mongodb');
    await mongodb.connect();

    const db = mongodb.db();

    logger.info('initializing modules and resolving dependencies');
    const openai = getOpenAIModule(logger);
    const ai = getAIModule(logger, openai.service);
    const health = getHealthModule(db, logger);
    const palette = getPaletteModule(db, logger);

    await Promise.all([
    ]);

    modules = {
      ai,
      logger,
      health,
      palette
    };

    isModulesReady = true;
  } catch (error) {
    logger.warn({ err: error }, 'initializing setup failed');
  }
}
