export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white pt-25">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600">We’d love to hear from you! Reach out with any questions or feedback.</p>
            <p className="text-gray-700"><strong>Email:</strong> support@nalakathshoes.com</p>
            <p className="text-gray-700"><strong>Phone:</strong> +91 98765 4321</p>
            <p className="text-gray-700"><strong>Address:</strong> wandoor, Kerala, India</p>
          </div>

          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
