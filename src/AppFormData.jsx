import React from 'react';

function AddBookForm() {
  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" required />
        </label>
        <br />
        <label>
          Cover Image URL:
          <input type="url" name="coverImageUrl" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBookForm;