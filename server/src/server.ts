import * as chalk from 'chalk';

import app from './app';
import config from './config';

const hostname: string = config.server.hostname;
const port: number = +config.server.port;

app.listen(port, hostname, () => {
  console.log(chalk.blue(`Server running at: http://${hostname}:${port}`));
});
