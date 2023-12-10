import React, { useState } from "react";
import "./Main.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cards from "../card/Cards";

export const Main = () => {
  //formdan alınacak değerlerin oluşturduğu bir arrayi useState kullanarak başlangıç değerleri veriyoruz
  const [datam, setDatam] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    image: "",
  });

  //arrayi dest. yapıyoruz.
  const { username, email, password, firstname, lastname, image } = datam;

  //card componentine göndereceğimiz parametre
  const [user, setUser] = useState({});

  // formu doldururken istediğimiz şartların kontrolü için yaptığımız use State ler
  const [sartlar, setSartlar] = useState(true);

  // password ün görünüp görünmemesini ayarlamak için kullandığım useState
  const [showpassword, setShowpassword] = useState("password");

  //sayfa açılırken ekran da bir boş Card yapısı gözükmesini istemiyoruz bu yüzden useState tanımlayıp card bilgilerini gönderdiğimizde ekrana görünmesini sağlıyoruz
  const [cardShow, setCardShow] = useState(false);

  const cardGoster = () => {
    setCardShow(!cardShow);
  };

  //sayfanın şartlara uyup uymadığını maus ile formda gezinirken bakılmasını sağladım,
  const submitActive = () => {
    if (
      email.includes("@") &&
      password.length >= 8 &&
      username.trim().length >= 3 &&
      firstname.trim().length >= 3 &&
      lastname.trim().length >= 3 &&
      email.split("@")[1].length >= 2 &&
      image.startsWith("http") &&
      !password.includes(" ")
    ) {
      // console.log("sağlandı")
      setSartlar(true);
    } else {
      // console.log("sağlanmadı")
      setSartlar(false);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    cardGoster();

    setUser({
      email,
      username,
      firstname,
      lastname,
      image,
      password,
    });

    setDatam({
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      image: "",
    });
  };
  //pssword gizli mi olsun gösterilsin mi?
  const handleshowPassword = () => {
    if (showpassword === "text") {
      setShowpassword("password");
    } else {
      setShowpassword("text");
    }
  };

  //datam a bilgiler anlık gidiyor
  const handleDatam = (e) => {
    setDatam({ ...datam, [e.target.id]: e.target.value });
  };

  return (
    <div className="container mt-3">
      <Form
        className="d-flex flex-column mx-auto col-12 col-sm-8 col-md-6 mt-4 form"
        onSubmit={handleFormSubmit}
        onMouseOver={submitActive}
      >
        <Form.Group className="mb-4 mt-4">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={handleDatam}
            type="email"
            placeholder="Enter email"
            value={email}
            id="email"
            required
          />
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={handleDatam}
            type="text"
            placeholder="User Name"
            value={username}
            id="username"
            required
          />
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleDatam}
            type="text"
            placeholder="First Name"
            value={firstname}
            id="firstname"
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleDatam}
            type="text"
            placeholder="Last Name"
            value={lastname}
            id="lastname"
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={handleDatam}
            type="url"
            placeholder="Enter Image Url"
            value={image}
            id="image"
            autoComplete="on"
          />
          <Form.Label>Password</Form.Label>
          <div className="password">
            <Form.Control
              onChange={handleDatam}
              type={showpassword}
              placeholder="Password"
              value={password}
              id="password"
            />
            <Button
              className="showhidden"
              variant="primary"
              type="click"
              onMouseOver={handleshowPassword}
            >
              Show/Hidden
            </Button>
          </div>
          <div className="buton">
            <Button
              className="mt-3 btn px-4"
              id="submitId"
              variant="danger"
              type="submit"
              disabled={!sartlar}
            >
              Submit
            </Button>
          </div>
        </Form.Group>
        {cardShow ? <Cards user={user} /> : ""}
      </Form>
    </div>
  );
};
export default Main;
