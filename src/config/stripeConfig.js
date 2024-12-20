import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QVLbWHUDtg5wWGKBDxV3jhnkkvfG5NWt3cCGqp0MZK6jZRsx1jAvP41DCgqn8atOrpxMXDT9Am9QLcWJGFL0DAi00d5DyKDvd',
);

export default stripePromise;
