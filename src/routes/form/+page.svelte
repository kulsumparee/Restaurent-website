<script>
    let name = "";
    let email = "";

    function handleSubmit() {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
        name = "";
        email = "";
    }
</script>

<form on:submit|preventDefault={handleSubmit} >
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} required />
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
    </div>
    <button type="submit">Submit</button>
</form>

<style>
    form {
        max-width: 300px;
        margin: 40px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        
    }
    label {
        display: block;
        margin-bottom: 10px;
    }
    input {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        background-color: #39DB4A;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        
     
    }
    button:hover {
        background-color: #50ba55;
    }
</style>