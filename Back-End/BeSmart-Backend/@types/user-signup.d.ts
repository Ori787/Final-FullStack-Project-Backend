type Iuser = {
name: Iname;
isBusiness: Boolean;
address: Iaddress;
email: string;
PhoneNumber: string;
image: Iimage;
password: string;
isAdmin: Boolean;
_id: string,
}; 

type Iaddress = {
state?: string;
country: string;
city: string;
street: string;
houseNumber: Number;
zip?: Number;
}

type Iimage = {
url: string;
alt: string;
}

type Iname = {
    first: String;
    middle?: String;
    last: String;
}

type Ilogin = {
    email: string;
    password: string;
  };

  type Ijwtpayload = {
    email: String;
  };

export { Iaddress, Iimage, Iname, Iuser, Ilogin, Ijwtpayload };