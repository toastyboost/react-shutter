import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Ui } from "../ui/st"

import { Accordion, Trigger, Content } from "../components"

storiesOf("Parameters", module).add("With animation", () => {
  return (
    <Ui>
      <Accordion animated={true} className="1">
        <Trigger>Learn Once, Write Anywhere</Trigger>
        <Content>
          We don’t make assumptions about the rest of your technology stack, so you can develop new
          features in React without <a>rewriting</a> existing code
        </Content>
      </Accordion>
    </Ui>
  )
})
