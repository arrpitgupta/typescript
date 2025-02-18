function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms} ms`);
    }, ms);
  });
}

delay(2000).then((message) => {
  console.log(message);
});
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Random success/failure
      if (success) {
        resolve("Fetched data successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchDataAsync(): Promise<void> {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();

function step1(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Step 1 complete"), 1000)
  );
}

function step2(previousResult: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(previousResult + " -> Step 2 complete"), 1000)
  );
}

function step3(previousResult: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(previousResult + " -> Step 3 complete"), 1000)
  );
}

step1().then(step2).then(step3).then(console.log).catch(console.error);
