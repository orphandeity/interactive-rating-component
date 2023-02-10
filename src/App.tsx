import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import StarIcon from './assets/icon-star.svg';
import ThankyouIcon from './assets/illustration-thank-you.svg';

function App() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    if (rating) setIsSubmitted(true);
    else return;
  }

  return (
    <main className="relative flex h-screen items-center justify-center">
      {isSubmitted ? (
        <ThankYou rating={rating} />
      ) : (
        <div className="flex h-[365px] max-w-[330px] flex-col justify-between gap-4 rounded-2xl bg-_dark-blue/60 p-6 shadow desktop:aspect-square desktop:h-auto desktop:max-w-md desktop:rounded-[2rem] desktop:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-_dark-blue desktop:h-14 desktop:w-14">
            <img
              src={StarIcon}
              alt="star icon"
              className="scale-75 desktop:scale-100"
            />
          </div>

          <div>
            <h1 className="text-2xl text-white desktop:text-3xl desktop:tracking-wider">
              How did we do?
            </h1>

            <p className="mt-4 text-sm font-light leading-6 text-_light-gray desktop:text-base desktop:tracking-wider">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>

          {/* Rating Selection */}
          <RadioGroup
            value={rating}
            onChange={setRating}
            className="flex justify-between py-2 text-_light-gray desktop:text-lg"
          >
            <RadioGroup.Option
              value={1}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white desktop:h-14 desktop:w-14"
            >
              1
            </RadioGroup.Option>
            <RadioGroup.Option
              value={2}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white desktop:h-14 desktop:w-14"
            >
              2
            </RadioGroup.Option>
            <RadioGroup.Option
              value={3}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white desktop:h-14 desktop:w-14"
            >
              3
            </RadioGroup.Option>
            <RadioGroup.Option
              value={4}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white desktop:h-14 desktop:w-14"
            >
              4
            </RadioGroup.Option>
            <RadioGroup.Option
              value={5}
              as="div"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-_dark-blue shadow-sm transition hover:bg-_orange hover:text-white ui-checked:bg-_medium-gray ui-checked:text-white desktop:h-14 desktop:w-14"
            >
              5
            </RadioGroup.Option>
          </RadioGroup>

          <button
            onClick={handleSubmit}
            className="mb-4 rounded-full bg-_orange py-3 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-_orange desktop:mb-0 desktop:text-base"
          >
            Submit
          </button>
        </div>
      )}

      <Attribution />
    </main>
  );
}

const ThankYou = ({ rating }: { rating: number | null }) => {
  return (
    <div className="flex h-[365px] max-w-[330px] flex-col items-center justify-between gap-4 rounded-2xl bg-_dark-blue/60 p-6 shadow desktop:aspect-square desktop:h-auto desktop:max-w-md desktop:justify-center desktop:gap-8 desktop:rounded-[2rem] desktop:p-8">
      <img src={ThankyouIcon} alt="thank you icon" />
      <p className="rounded-full bg-_dark-blue py-2 px-3 text-sm font-light text-_orange desktop:px-6 desktop:text-base">
        You selected <span>{rating}</span> out of 5
      </p>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-white">Thank you!</h1>

        <p className="mt-3 mb-4 text-center text-sm font-light leading-6 text-_light-gray desktop:text-base">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

const Attribution = () => {
  return (
    <div className="absolute bottom-4 mx-auto text-xs text-_medium-gray">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-blue-500"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.frontendmentor.io/profile/orphandeity"
        className="text-blue-500"
      >
        Jeff R Williams
      </a>
      .
    </div>
  );
};

export default App;
