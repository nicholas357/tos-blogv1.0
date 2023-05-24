import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODQ5NDc0NjcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbGh6NGFlYmgybG82MDF0YjBoOGNocDM1L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI5ZDhhNGYwOC0zNTBiLTRjY2QtOThmMy0yNTQzZTdiOWVmYzAiLCJqdGkiOiJjbGkxeTd1bHUwOHMyMDF0YWdlMWw4ZmtlIn0.CBGptwVLVXZwyKlGQoKCH8mhjQnqyXiDgX8p2qreSsziTTu91Vdp4yHeQvSgImMD4lx1MozZpss1DKzeNrJMYZqsAMH4pSJIn7uZrE6oJPpyklnn-YMKPxRl4Wl62Zk-R7KCLQvKPXA9nSE3sdeFZ0vCrcAL8Cd3f5ZZEgYsaEjdA58yobOoI_jZIx6UUDn4WmyOno3v-M0i6_WYOMBjbhMeQItAkE4Nl_8EgkNNmAJQRK15DgjcGDjpGyspIxejh0PRYT3kcFeuJVi_ZfreBaWosC_Bp2U3NjztpWzbMDC0eZPEcAaptGmFreQobijNbHUJvWspizwZSCKefHKOKGvlvxaVvq7fM2mS9382X0ilUbGQe9S66toUJ273u_c-rN_Ck0ZDoHxY8g1_qatE77mht_9CEo_5URqpzZeSPtQpbNzj_YeQ4hsliGLtm-Ht0fvZVNYvBnuuQB8ognS4oZJl-gyHjH-X3igF9IA-bXNxJ9BLh6TzSxlWsPN8sdRJlvPCw0KFgQ4vrOkKFl6RqkZAjJPp_Rg_tEvYbn_zeXnha_j1phJk6TIUt7IzzkwB04MwO6G3hn99PhXvffkweP-HoDL5J3ytt5wRDAQ7_6pIeToxfIj_G8EupzjYC_2asWLIfkqdD6xhPNnlSO_qXTRud3xzhPVeFtElyVvm5cs'}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}