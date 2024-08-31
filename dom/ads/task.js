let rotators = [];

const rotatorEl = document.querySelectorAll('.rotator');
rotatorEl.forEach(element =>
    {
        const rotatorItems = element.querySelectorAll('.rotator__case');
        rotators.push(
            {
                rotator: element,
                items: rotatorItems,
                index: 0,
            }
        );
    }
);

setInterval(() =>
    {
        rotators.forEach(rotator =>
            {
                const currentItem = rotator.items[rotator.index];
                if (currentItem != undefined)
                currentItem.classList.remove('rotator__case_active');
                rotator.index = (rotator.index + 1) % rotator.items.length;
                const nextItem = rotator.items[rotator.index];
                nextItem.classList.add('rotator__case_active');
            }
        );
    },
1000);
