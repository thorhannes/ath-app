import * as sst from "@serverless-stack/resources";

import { HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";

export default class ApiStack extends sst.Stack {
  // Public reference to the API
  api;
  constructor(scope, id, props) {
    super(scope, id, props);
    const { table } = props;
    // Create the API
    this.api = new sst.Api(this, "Api", {
      cors: true,
      defaultAuthorizationType: "AWS_IAM",
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: table.tableName,
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        },
      },

      routes: {
        "POST /ath": "src/create.main",
        "GET /ath/{id}": "src/get.main",
        "GET /aths": "src/list.main",
        "PUT /ath/{id}": "src/update.main",
        "DELETE /ath/{id}": "src/delete.main",
        "POST /billing": "src/billing.main",
      },
    });
    // Allow the API to access the table
    this.api.attachPermissions([table]);
    // Show the API endpoint in the output
    this.addOutputs({
      ApiEndpoint: this.api.url,
    });
  }
}
