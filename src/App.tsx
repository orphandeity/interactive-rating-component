function App() {
  return (
    <main>
      {/* <!-- Rating state start --> */}

      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <button>Submit</button>

      {/* <!-- Rating state end --> */}

      {/* <!-- Thank you state start --> */}

      <p>
        You selected <span>ADD RATING HERE</span> out of 5
      </p>

      <p>Thank you!</p>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>

      {/* <!-- Thank you state end --> */}
    </main>
  );
}

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
