export default function InputForm({
  qrcodeName,
  setQrcodeName,
  url,
  setUrl,
  qrCodeType,
  customizePage,
}) {

  return (
    <>
      <form
        className={`${
          customizePage ? "hidden" : null
        } mt-10 flex flex-col gap-5`}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-grey">Name your QRcode</label>
          <input
            id="name"
            value={qrcodeName}
            placeholder="Enter name here"
            onChange={(e) => setQrcodeName(e.target.value)}
            className="w-full text-white shadow-sm rounded-md p-2 bg-lightCulture border-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col space-y-2 mt-2">
          <label htmlFor="url" className="text-grey">
            {qrCodeType === "website"
              ? "Enter website URL"
              : qrCodeType === "social media"
              ? "Enter social media link"
              : qrCodeType === "coupon"
              ? "Enter coupon link"
              : qrCodeType === "PDF"
              ? "Enter PDF file"
              : null}
          </label>
          <input
            id="url"
            value={url}
            placeholder="Enter URL here"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full text-white shadow-sm rounded-md p-2 bg-lightCulture border-2 outline-none bg-transparent"
          />
        </div>
      </form>
    </>
  );
}
