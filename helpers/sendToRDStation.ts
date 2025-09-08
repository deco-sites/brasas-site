export const sendToRDStation = (formData, id) => {
  const data = {
    identificador: id,
    token_rdstation: "69e11690d06eb320c8a8c4f7caa4c345",
    form_url: window.location.href,
    page_title: document.title,
    client_id: "5de4681e-5816-4db9-b635-6b0aa95b268f",
    traffic_source:
      "encoded_eyJmaXJzdF9zZXNzaW9uIjp7InZhbHVlIjoiKG5vbmUpIiwiZXh0cmFfcGFyYW1zIjp7fX0sImN1cnJlbnRfc2Vzc2lvbiI6eyJ2YWx1ZSI6Imh0dHBzOi8vYXBwLnJkc3RhdGlvbi5jb20uYnIvY29uZmlndXJhY29lcy9hbmFsaXNlLWUtbW9uaXRvcmFtZW50byIsImV4dHJhX3BhcmFtcyI6e319LCJjcmVhdGVkX2F0IjoxNzMwODE4OTQ2MzI0fQ==",
    ...formData,
  };

  fetch("https://www.rdstation.com.br/api/1.3/form-integrations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((result) => {
      console.log("Formulário enviado com sucesso para o RD Station:", result);
    })
    .catch((error) =>
      console.error("Erro ao enviar o formulário para o RD Station:", error)
    );
};
