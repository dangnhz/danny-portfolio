<template>
    <section id="about-me" class="about-container">
         <div class="section-1">
            <div class="row d-flex align-items-center">
                <div class="col-5 text-light text-description">
                    <h1>I create websites with attention to detail and faithful to the design.</h1>
                </div>
                <div class="right-bg col-7" data-aos="fade-left" data-aos-offset="100">
                    <div class="image-bg"><img style="width: 100%; height: 100%;" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="image"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        </div>
        <div class="section-2">
            <div class="row d-flex align-items-center">
                <div id= "my-values" class="col-5 order-2 text-light text-description">
                    <h1>My values: <br> 
                    <span class="my-value" data-explanation="Always working with accuracy and transparency.">integrity,</span> <br> 
                    <span class="my-value" data-explanation="Well-made website require effort and comprehension.">understanding</span> <br>and <br>
                    <span class="my-value" data-explanation="Focus is the key, extremely attentive to accuracy and detail.">thoroughness.</span>
                    </h1>
                </div>
                <div class="right-bg col-7 text-center" data-aos="fade-right" data-aos-offset="100">
                    <div class="image-bg"><img style="width: 70%; height: 10%;" src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=710&q=80" alt="image"></div>
                </div>
            </div>
        </div>
        <div id="my-value-explanation">{{explanation}}</div>
    </section>
</template>

<script>
import gsap from 'gsap'
    export default {
        name:'about-me',
        data() {
            return {
                explanation: ''
            }
        },
        mounted () {
            const values = document.querySelectorAll('.my-value');
            const my_values_el = document.querySelector('#my-values')
            gsap.set('#my-value-explanation', {
                x: my_values_el.getBoundingClientRect().x,
                y: my_values_el.getBoundingClientRect().y
            })
            values.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    this.explanation = e.target.dataset.explanation
                    gsap.to('#my-value-explanation', {
                        opacity: 1,
                        visibility: 'visible',
                        x: e.clientX + 50,
                        y: e.clientY + 15
                    })
                })
            })

            values.forEach(item => {
                item.addEventListener('mouseleave', () => {
                    gsap.to('#my-value-explanation', {
                        opacity: 0,
                        visibility: 'hidden'
                    })
                    this.explanation = ''
                })
            })
        },
    }
</script>

<style lang="less" scoped>
@import "../assets/style/setting.less";
.about-container {
    width: 100%;
    height: 100%;
    padding: 10rem 0;
    background: @bg-dark;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    display: none;
}
    .section-1, .section-2 {
        width: 90%;
        margin: 10rem auto;
        @media @mobile, @large-mobile, @tablet {
            width: 100%;
            padding: 1rem;
        }

        .text-description {
            z-index: 1;
            transform: translateX(10rem);
            @media @mobile, @large-mobile, @tablet {
            transform: translateX(0);
        }
            h1 {
                font-family: Lato-Light;
                font-size: 1.8rem;
                line-height: 3rem;
                @media @mobile, @large-mobile, @tablet {
            font-size: 1rem;
            line-height: 2rem;
        }
            }
        }
    }
    .section-2 {
        .text-description {
            z-index: 1;
            transform: translateX(0);
            h1 {
                font-family: Lato-Light;
            }
            .my-value {
                cursor: pointer;
                // text-decoration: underline;
                border-bottom: 1px solid @white;
            }
        }

    }
    #my-value-explanation {
            background: rgba(255,255,255,0.1);
            color: @text-color;
            opacity: 0;
            width: fit-content;
            padding: 10px 20px;
            border-radius: 10px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            transition: opacity 0.3s;
        }
}
</style>