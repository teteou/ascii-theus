// app/pgp/page.tsx
export default function PgpPage() {
  const fingerprint = "cb1fc48e40b6d29caf172931f652dbf73e71ac89";

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">PGP Public Key</h1>
      <p className="mt-2 text-neutral-700">
        Descarga mi clave pública y verifica el fingerprint antes de confiar.
      </p>

      <div className="mt-4 flex gap-3 items-center">
        <a
          href="/pgp.asc"
          download
          className="inline-flex rounded border px-3 py-1 text-sm hover:bg-neutral-50"
        >
          Descargar pgp.asc
        </a>
        <code className="text-xs">
          Fingerprint: <span className="select-all">{fingerprint}</span>
        </code>
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer text-sm">
          Ver clave (armored)
        </summary>
        <pre className="mt-3 p-3 rounded border overflow-auto text-xs leading-tight">
          {`-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEZzJYpBYJKwYBBAHaRw8BAQdAeyy+ex/QnWui45NWFw+6RVnWCekM4Jgw
LljPOoQMTqzNMWRldkBtYXRoZXVzZmVycmVpcmEuY29tIDxkZXZAbWF0aGV1
c2ZlcnJlaXJhLmNvbT7CjAQQFgoAPgWCZzJYpAQLCQcICZD2Utv3PnGsiQMV
CAoEFgACAQIZAQKbAwIeARYhBMsfxI5AttKcrxcpMfZS2/c+cayJAACaOQD+
L5UtMDrr09yx/OaYPSvTQahr323RP0lG64xNoR07dJ4BAML6yP5VRHfvBvRu
Pvr+QXRqMEmjwy0O81p7wGiEOq8BzjgEZzJYpBIKKwYBBAGXVQEFAQEHQHEV
bwTqUsp/k/4bvyOabq1zt99kpvIf9ezIr2iRphkYAwEIB8J4BBgWCgAqBYJn
MlikCZD2Utv3PnGsiQKbDBYhBMsfxI5AttKcrxcpMfZS2/c+cayJAACDsQD8
CgPmyaEW65rRorMvEiaKyctIbxnVLRP1EoF44crdN6EBAKgzr1J4saUvWEBx
l7WUPzwhLBbO3BblF4AngTp5nrEF
=GzIs
-----END PGP PUBLIC KEY BLOCK-----`}
        </pre>
      </details>
    </main>
  );
}
