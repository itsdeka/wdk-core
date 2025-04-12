import {Logger, LogLevel} from '@ethersproject/logger';

// We don't want to be showing any errors from the providers
Logger.setLogLevel(LogLevel.OFF);
