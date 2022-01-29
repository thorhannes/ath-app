import AuthStack from "./AuthStack";
import StorageStack from "./StorageStack";
import ApiStack from "./ApiStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");
  const apiStack = new ApiStack(app, "api", {
    table: storageStack.table,
  });
  new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });
}

// export default function main(app) {
//   const storageStack = new StorageStack(app, "storage");
//   new ApiStack(app, "api", {
//     table: storageStack.table,
//   });
// }

// export default function main(app) {
//   new StorageStack(app, "storage");
// }

// import MyStack from "./MyStack";

// export default function main(app) {
//   // Set default runtime for all functions
//   app.setDefaultFunctionProps({
//     runtime: "nodejs14.x"
//   });

//   new MyStack(app, "my-stack");

//   // Add more stacks
// }
