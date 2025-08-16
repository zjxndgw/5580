import React, { useState } from "react";

function Login() {
  const [address, setAddress] = useState("");

  const handleLogin = () => {
    alert("已登录: " + address);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>用户登录</h2>
      <input
        placeholder="请输入钱包地址"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

export default Login;
