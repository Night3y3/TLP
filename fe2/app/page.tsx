"use client"
import LandingPage from "@/components/LandingPage/LandingPage"
import LoginForm from "@/components/Authentication/LoginForm/LoginForm"
import SignUp from "@/components/Authentication/SignUp/SignUp"
import { LinearStepper } from "@/components/MainWork/LinearStepper/LinearStepper"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div>
        <LandingPage />

        {/* <LinearStepper /> */}
        {/* <SignUp /> */}
        {/* <LoginForm /> */}

      </div>
    </main>
  )
}
