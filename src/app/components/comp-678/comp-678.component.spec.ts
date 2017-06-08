/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp678Component } from './comp-678.component';

describe('Comp678Component', () => {
  let component: Comp678Component;
  let fixture: ComponentFixture<Comp678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
