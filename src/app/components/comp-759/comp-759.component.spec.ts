/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp759Component } from './comp-759.component';

describe('Comp759Component', () => {
  let component: Comp759Component;
  let fixture: ComponentFixture<Comp759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
