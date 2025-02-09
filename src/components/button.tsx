// @ts-ignore
import { Button } from "@cred/neopop-web/lib/components";

const ButtonComponent = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            Primary
        </Button>
    );
};

export default ButtonComponent;