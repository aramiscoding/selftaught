import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, {loader as rootLoader,
  action as rootAction,
  loader,
  action} from './routes/root';
import Index from "./routes/index";
import './index.css';
import ErrorPage from './error-page';
import Contact, {loader as contactLoader,
  action as contactAction} from './routes/contact';
import EditContact, {action as editAction} from './routes/edit';
import { deleteUser } from './routes/delete';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: "contacts/:contactId/destroy",
            action: deleteUser,
            errorElement: <div>Oops! There was an error.</div>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)