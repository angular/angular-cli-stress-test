/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp590Component } from './comp-590.component';

describe('Comp590Component', () => {
  let component: Comp590Component;
  let fixture: ComponentFixture<Comp590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
