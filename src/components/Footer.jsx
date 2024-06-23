export default function Footer() {
  const sendEmail = () => {
    // Replace with your recipient email address
    const recipientEmail = "Nouicer.samiIlyas@gmail.com"
    const subject = "Hey! I'm reaching out from your website!"
    const body = "Hey"

    // Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // Open the default email client
    window.location.href = mailtoLink
  }
  return (
    <footer className=" text-white text-center p-5 h-96 flex items-center justify-center mt-16">
      <div className="flex flex-col  rounded-md p-8 w-1/2 items-center justify-center gap-8">
        <h1 className="text-7xl font-extrabold">Get in Touch</h1>
        <p className="font-bold text-gray-400 mb-16">
          I'm currently looking for Job or internship opportunities , my inbox
          is always open i'll try to reach back to you as soon as i can{" "}
        </p>
        <p className="font-bold ">Nouicer.samiIlyas@gmail.com</p>
        <button
          onClick={sendEmail}
          className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-1/5"
        >
          Send a message
        </button>
      </div>
    </footer>
  )
}
