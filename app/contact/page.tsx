"use client"

import { title } from "@/components/primitives";
import React from "react";
import {Form, Input, Button, Textarea} from "@nextui-org/react";

export default function ContactPage() {

  const [action, setAction] = React.useState(null);

  return (
    <div>
      <h1 className={title()}>Contact Us</h1>
      <div className="flex flex-col max-w-5xl items-center justify-center gap-4 py-8 md:py-10">
        <Form
        className="flex flex-row flex-wrap gap-4"
        validationBehavior="native"
        // onReset={() => setAction("reset")}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   let data = Object.fromEntries(new FormData(e.currentTarget));
        //   setAction(`submit ${JSON.stringify(data)}`);
        // }}
      >
        <Input
          isRequired
          label="Name / Organization"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your name"
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          label="Subject"
          labelPlacement="outside"
          name="subject"
          placeholder="Have a request?"
          type="text"
        />

        <Textarea
          isRequired
          label="Message"
          labelPlacement="inside"
          name="subject"
          placeholder="Write your message..."
          type="text"
          fullWidth={true}
        />


        <div className="flex gap-2">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
      </div>
    </div>
  );
}
