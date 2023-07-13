'use client'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment, useEffect } from 'react'
import { createPortal } from 'react-dom'

let drawerRoot

export function EditorDrawer(props) {
    const { title, open, onClose, onCancel, onSave, children } = props

    useEffect(() => {
        drawerRoot = document.getElementById('editor-drawer')

        console.log('depth', drawerRoot.childNodes.length)
    }, [open])

    if (!drawerRoot) return null

    return createPortal(
        <Transition.Root show={open} as={Fragment}>
            <Transition.Child
                as={Fragment}
                // enter="transform transition ease-in-out duration-500 sm:duration-700"
                // enterFrom="translate-x-full"
                // enterTo="translate-x-0"
                // leave="transform transition ease-in-out duration-500 sm:duration-700"
                // leaveFrom="translate-x-0"
                // leaveTo="translate-x-full"
            >
                <div className="pointer-events-auto w-screen max-w-md">
                    <div className="box-border flex  h-[calc(100vh-64px)] flex-col divide-y divide-gray-200 bg-white pt-4 shadow-xl">
                        <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll">
                            <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <div className="text-base font-semibold leading-6 text-neutral-800">
                                        {title}
                                    </div>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button
                                            type="button"
                                            className="focus-visible:transparent current:text-primary-700 ml-1 rounded-md bg-white text-gray-400 transition-all ease-in hover:text-gray-500 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                                            onClick={onClose}
                                        >
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mb-3 mt-5 flex-1 px-4 sm:px-6">
                                <div className="relative w-full border-t border-neutral-200" />
                                {children}
                            </div>
                        </div>
                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                            <button
                                type="button"
                                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm ring-1 ring-inset ring-neutral-300 transition-all ease-in hover:ring-neutral-500"
                                onClick={() =>
                                    onCancel ? onCancel() : onClose()
                                }
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="focus-visible:transparent ml-1 inline-flex justify-center rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all ease-in hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                onClick={onSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </Transition.Child>
        </Transition.Root>,
        drawerRoot
    )
}
