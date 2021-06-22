import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper/ContentWrapper.component";

import CheckoutProgress from "Component/CheckoutProgress/CheckoutProgress.component";

export class Checkout extends SourceCheckout {
  render() {
    const step = this.props.match.params.step;
    return (
      <main block="Checkout">
        <CheckoutProgress step={step} />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
