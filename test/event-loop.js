const { readFile,readFileSync } = require('fs')

setImmediate(()=>{console.log('[阶段3，immediate] immediate 回调1');})
setImmediate(()=>{console.log('[阶段3，immediate] immediate 回调2');})
setImmediate(()=>{console.log('[阶段3，immediate] immediate 回调3');})

Promise.resolve()
    .then(()=>{
        console.log('[...待切入下一阶段] promise 回调1')
        setImmediate(()=>{console.log('[阶段3，immediate] promise 回调1增加的immediate回调4');})
    })

readFile('../package.json','utf-8',data=>{
    console.log('[阶段2...IO 回调] 读文件回调1');
    readFile('../miusc.mp3','utf-8',data=>{
        console.log('[阶段2...IO 回调] 读文件回调2');
        setImmediate(()=>{console.log('[阶段3，immediate] 读文件回调2 增加的immediate回调4');})
    })

    setImmediate(()=>{
        console.log('[阶段3，immediate] immediate 回调4');
        Promise.resolve()
            .then(()=>{
                console.log('[...待切入下一阶段] promise 回调2')
                process.nextTick(()=>console.log('[...待切入下一阶段] promise 回调2 增加的nextTick回调5'))
            })
            .then(()=>{
                console.log('[...待切入下一阶段] promise 回调3')
            })
    })

    setImmediate(()=>{
        console.log('[阶段3，immediate] immediate 回调5');
        process.nextTick(()=>console.log('[...待切入下一阶段] immediate 回调5 增加的nextTick回调6'))
        console.log('[...待切入下一阶段] 这块正在同步阻塞的读一个大文件');
        const video = readFileSync('../miusc.mp3','utf-8')
        process.nextTick(()=>console.log('[...待切入下一阶段] immediate 回调5 增加的nextTick回调7'))
        readFile('../package.json','utf-8',data=>{
            console.log('[阶段2,...IO 回调] 读文件回调2');
            setImmediate(()=>{console.log('[阶段3，immediate] 读取回调2 增加的immediate 回调6');})
            setTimeout(()=>{console.log('[阶段1...定时器] 定时器回调8');},0)
        })
    })
    process.nextTick(()=>{
        console.log('[...待切入下一阶段] 读文件回调1 增加的 nextTick 回调6')
    })
    setTimeout(()=>{console.log('[阶段1...定时器] 定时器回调6');},0)
    setTimeout(()=>{console.log('[阶段1...定时器] 定时器回调7');},0)

})

setTimeout(()=>console.log('[阶段1，...定时器] 定时器 回调1'),0)
setTimeout(()=>{
    console.log('[阶段1，...定时器] 定时器 回调2');
    process.nextTick(()=>{
        console.log('[...待切入下一阶段] nextTick 回调2')
    })
},0)

setTimeout(()=>console.log('[阶段1，...定时器] 定时器 回调3'),0)
setTimeout(()=>console.log('[阶段1，...定时器] 定时器 回调4'),0)

process.nextTick(()=>console.log('[...待切入下一阶段] nextTick 回调1'))
process.nextTick(()=>{
    console.log('[...待切入下一阶段] nextTick 回调2')
    process.nextTick(()=>console.log('[...待切入下一阶段] nextTick 回调4'))
})
process.nextTick(()=>console.log('[...待切入下一阶段] nextTick 回调3'))


    // [...待切入下一阶段] nextTick 回调1
    // [...待切入下一阶段] nextTick 回调2
    // [...待切入下一阶段] nextTick 回调3
    // [...待切入下一阶段] nextTick 回调4
    // [...待切入下一阶段] promise 回调1
    // [阶段1，...定时器] 定时器 回调1
    // [阶段1，...定时器] 定时器 回调2
    // [阶段1，...定时器] 定时器 回调3
    // [阶段1，...定时器] 定时器 回调4
    // [...待切入下一阶段] nextTick 回调2
    // [阶段3，immediate] immediate 回调1
    // [阶段3，immediate] immediate 回调2
    // [阶段3，immediate] immediate 回调3
    // [阶段3，immediate] promise 回调1增加的immediate回调4
    // [阶段2...IO 回调] 读文件回调1
    // [...待切入下一阶段] 读文件回调1 增加的 nextTick 回调6
    // [阶段3，immediate] immediate 回调4
    // [阶段3，immediate] immediate 回调5
    // [...待切入下一阶段] 这块正在同步阻塞的读一个大文件
    // [...待切入下一阶段] immediate 回调5 增加的nextTick回调6
    // [...待切入下一阶段] immediate 回调5 增加的nextTick回调7
    // [...待切入下一阶段] promise 回调2
    // [...待切入下一阶段] promise 回调3
    // [...待切入下一阶段] promise 回调2 增加的nextTick回调5
    // [阶段1...定时器] 定时器回调6
    // [阶段1...定时器] 定时器回调7
    // [阶段2,...IO 回调] 读文件回调2
    // [阶段3，immediate] 读取回调2 增加的immediate 回调6
    // [阶段1...定时器] 定时器回调8
    // [阶段2...IO 回调] 读文件回调2
    // [阶段3，immediate] 读文件回调2 增加的immediate回调4