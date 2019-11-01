console.log("start");

export const eventually = async <R>(
  f: () => R,
  timeout: number = 10,
  interval: number = 1
): Promise<R> => {
  const start = Date.now();
  const until = new Date(start + timeout * 1000);
  try {
    await delay(interval);
    return await exec(
      f,
      until,
      interval,
      new UnexecutedError("Not executed yet.")
    );
  } catch (e) {
    throw new TimeoutError(timeout, e);
  }
};

const delay = (t: number) => new Promise(x => setTimeout(x, t * 1000));

const exec = async <R>(
  f: () => R,
  until: Date,
  interval: number = 1,
  lastError: Error
): Promise<R> => {
  if (Date.now() > until.getTime()) throw lastError;
  try {
    return f();
  } catch (e) {
    await delay(interval);
    return await exec(f, until, interval, e);
  }
};

class TimeoutError extends Error {
  constructor(timeout, lastError) {
    const message =
      "Couldn't execute within ${timeout} seconds. Last Error: ${lastError.message}";
    super(message);
  }
}
class UnexecutedError extends Error {}
