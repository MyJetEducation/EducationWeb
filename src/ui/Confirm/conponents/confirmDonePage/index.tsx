import React, {useEffect, useState} from 'react';
import {Button} from "../../../components/Button";
import {useNavigate} from "react-router-dom";

const ConfirmDonePage = () => {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setConfirm(true)
    }
  }, [])
  return (
    <>
      <div>
        {
          confirm ? (
            <>
              <h1 style={{textAlign: "center", marginBottom: "20px"}}>Your email address has been verified</h1>
              <Button variant={"bgBlue"} onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
            </>
          ) : (
            <div>This is register confirm</div>
          )
        }
      </div>
    </>
  )
}

export default ConfirmDonePage;