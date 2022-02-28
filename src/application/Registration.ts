import req from "../services/request";
import {configEndpoint} from "../config";
import {useAuth} from "../services/auth";
import {useNavigate} from "react-router-dom";

export function useRegistration() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function registration(email: Email, password: Password, firstName: FirstName, lastName: LastName): Promise<void> {
    const user = await req(configEndpoint.createAccount, {
      "userName": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName
    });
    console.log("####: user", user);
    auth.signIn(user.data, () => {
      navigate('/');
    })
    auth.signInRefresh(user.data)
  }

  return {
    user: auth.user,
    registration,
  };
}
