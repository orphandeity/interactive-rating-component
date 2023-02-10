import { SetStateAction, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import StarIcon from './assets/icon-star.svg';
import ThankyouIcon from './assets/illustration-thank-you.svg';

function App() {
  const [rating, setRating] = useState(4);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="flex h-screen items-center justify-center">
      {isSubmitted ? (
        <ThankYou rating={rating} />
      ) : (
        <div className="flex h-[365px] max-w-[330px] flex-col justify-between gap-4 rounded-2xl bg-_dark-blue/60 p-6 shadow">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-_dark-blue">
            <img src={StarIcon} alt="star icon" />
          </div>
          <h1 className="text-2xl text-white">How did we do?</h1>

          <p className="text-sm font-light leading-6 text-_light-gray">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          {/* Rating Selection */}
          <RadioGroup
            value={rating}
            onChange={setRating}
            className="flex justify-between py-2 text-_light-gray"
          >
            <RadioGroup.Option
              value={1}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
            >
              1
            </RadioGroup.Option>
            <RadioGroup.Option
              value={2}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
            >
              2
            </RadioGroup.Option>
            <RadioGroup.Option
              value={3}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
            >
              3
            </RadioGroup.Option>
            <RadioGroup.Option
              value={4}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
            >
              4
            </RadioGroup.Option>
            <RadioGroup.Option
              value={5}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white"
            >
              5
            </RadioGroup.Option>
          </RadioGroup>

          <button className="mb-4 rounded-full bg-_orange py-3 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-_orange">
            Submit
          </button>
        </div>
      )}

      {/* TODO: Attribution */}
    </main>
  );
}

const ThankYou = ({ rating }: { rating: number | null }) => {
  return (
    <div className="flex h-[365px] max-w-[330px] flex-col items-center justify-between gap-4 rounded-2xl bg-_dark-blue/60 p-6 shadow">
      <img src={ThankyouIcon} alt="thank you icon" />
      <p className="rounded-full bg-_dark-blue py-2 px-3 text-sm font-light text-_orange">
        You selected <span>{rating}</span> out of 5
      </p>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-white">Thank you!</h1>

        <p className="mt-3 mb-4 text-center text-sm font-light leading-6 text-_light-gray">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

const Attribution = () => {
  return (
    <div>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.frontendmentor.io/profile/orphandeity">
        Jeff R Williams
      </a>
      .
    </div>
  );
};

export default App;
