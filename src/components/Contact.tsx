// components/Contact.tsx
const Contact = () => {
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col contact-info">
            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-address-book"></i>
              </div>
              <h5>Address</h5>
              <h6>Bafal, Kathmandu, Nepal</h6>
            </div>

            <div className="contact-item">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h5>Email</h5>
              <h6>aashishmaharjan2001@gmail.com</h6>
            </div>
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5447.1279172285385!2d139.69310620430838!3d35.701339799047844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2e84edeefb%3A0x2c964b66ddd1dbe0!2s1-ch%C5%8Dme-20-17%20Hyakuninch%C5%8D%2C%20Shinjuku%20City%2C%20Tokyo%20169-0073%2C%20Japan!5e0!3m2!1sen!2snp!4v1728193136601!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
