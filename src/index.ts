import "dotenv/config";
import IntraRequest from "./intra";

const request = new IntraRequest(null);
const user = await request.get(`/v2/users/escura`, {});

console.log(user);
