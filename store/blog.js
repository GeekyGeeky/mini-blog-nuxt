
export const state = () => ({
    posts: [
        {
            title: "This is some blog post here",
            content:
                "Some content here is just for example and checking how the layout will work",
            image: "https://placekitten.com/300/300",
            slug: "this-is-some-blog-post-234",
        },
        {
            title: "How I started python programming",
            content:
                `<p>
                Sodales porta porta etiam donec eros eget amet habitant, malesuada justo. Bibendum tortor et et dis platea. Cubilia molestie ullamcorper suspendisse porta condimentum sociis dignissim lectus ligula. Lectus himenaeos convallis tortor himenaeos. Diam tincidunt class duis commodo convallis, quis lobortis torquent magnis nisi. Ultrices aptent mattis egestas placerat! Pellentesque vehicula phasellus auctor tempus a ligula porttitor in?
                </p>
                <p>
                Imperdiet aliquam dictum pulvinar semper ante tortor penatibus purus primis. Iaculis porta ante curabitur. Montes facilisis pulvinar lacinia fusce aliquet lacus augue dictumst posuere ligula suspendisse. Velit torquent urna id malesuada per metus conubia taciti. Pellentesque a nostra himenaeos. Mauris lacus vel pellentesque vulputate adipiscing, eget suspendisse per duis praesent et. Faucibus tempus vitae habitasse fermentum ridiculus aptent, tempus quis cubilia sociosqu fermentum. Phasellus consectetur morbi commodo congue natoque pretium, sociis lectus dui. Amet quisque nullam lobortis tellus fermentum. Tempor class.
                </p>
                <p>
                Potenti eleifend turpis vulputate. Sit malesuada, netus risus fermentum! Curabitur netus primis aliquam consectetur. Scelerisque auctor, nascetur arcu. Luctus magnis euismod adipiscing! Eleifend taciti nisi tempor auctor enim lacinia mollis pharetra ut. Enim suspendisse cubilia tellus ipsum cursus nibh proin fermentum. Elit eros nulla, congue libero aliquet. Sit tincidunt proin dictumst vel. Penatibus lobortis aliquam feugiat facilisi magna erat potenti nulla dignissim ornare accumsan et. Fermentum ligula tincidunt arcu etiam taciti lacinia massa. Sed non mi posuere cursus netus. Tempor sollicitudin platea etiam tempus pretium. Sollicitudin posuere odio vehicula!
                </p>
                <p>
                Facilisis phasellus vel consequat, vel sodales suspendisse eleifend a nam diam luctus. Nascetur justo lacinia laoreet platea pharetra posuere purus suscipit. Aptent porttitor, donec vehicula feugiat congue non. Lacinia at inceptos potenti. Eu enim nisi euismod mauris rhoncus venenatis molestie metus ac luctus. Fames ridiculus sed lacinia odio. Ullamcorper dictumst fringilla nunc pharetra duis pellentesque blandit dui eros. Habitant eget pretium lectus laoreet mollis elementum lacus fermentum odio praesent natoque nam. Diam integer proin eu vestibulum.
                </p>
                <p>
                Fermentum lacinia vel fringilla platea lacinia parturient est leo. Diam sem nam curae; dapibus at justo porttitor ad. Pretium iaculis interdum tortor ut adipiscing gravida commodo aenean feugiat? Eu sapien platea nascetur neque vehicula varius proin elit scelerisque ac? Vulputate ultrices fames diam donec duis praesent augue himenaeos. Auctor parturient dictum aenean scelerisque cum tortor dictum. Vivamus lectus natoque sodales sociosqu laoreet ut posuere. Augue, donec donec dignissim. Egestas purus ridiculus proin euismod aliquet dictumst lacus aenean.
                </p>`,
            image: "https://picsum.photos/400/400/?image=20",
            slug: "how-i-started-python-programming-3930",
        },
        {
            title: "Creating packages and how to publish them",
            content:
                "Creating packages can be tedious and time consuming but in this tutorial, I will walk you through how I create my packages and manage them online.",
            image:
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            slug: "creating-packages-and-how-to-publish-83jshs",
        },
    ]
});

export const getters = {
    getAllPosts: state => {
        return state.posts;
    }
}

export const mutations = {
    // persistUserLogin: state => {
    //     state.isLoggedIn = true;
    // }
}

export const actions = {

}

