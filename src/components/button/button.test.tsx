/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Button from "./button";

const onPressMock = jest.fn();

const BUTTON_LABEL = "Test button label";

const props: React.ComponentProps<typeof Button> = {
  label: BUTTON_LABEL,
};

const component = <Button {...props} />;

// ... button tests
