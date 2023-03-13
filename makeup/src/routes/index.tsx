import { Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<RequireAuth />} />
        <Route path="/users" element={<RequireAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  )
}
