// Sends website enquiries to the admin inbox through Web3Forms.
// The access key is public by design (it can only submit to the email it was created for).
const ENDPOINT = "https://api.web3forms.com/submit";

export async function submitEnquiry(fields: Record<string, string>): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error("Contact form is not configured yet.");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New website enquiry - Full Stack Solutions",
      from_name: "FSS Website",
      ...fields,
    }),
  });

  let data: { success?: boolean; message?: string } = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response, handled below
  }
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
}
