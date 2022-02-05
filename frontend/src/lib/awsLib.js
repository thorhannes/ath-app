import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });
  return stored.key;
}

export async function deleteS3Object(file) {
  const access = { level: "private" };

  const removed = await Storage.vault.remove(file, access);

  return removed.key;
}

// export async function deleteS3Object(filename, userToken) {
//   await getAwsCredentials(userToken);
//   const { Bucket } = config.s3;
//   const s3 = new AWS.S3({
//     params: { Bucket },
//   });
//   return s3
//     .deleteObject({
//       Bucket,
//       Key: filename,
//     })
//     .promise();
// }
