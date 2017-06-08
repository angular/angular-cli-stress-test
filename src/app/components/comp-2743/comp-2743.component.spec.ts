/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2743Component } from './comp-2743.component';

describe('Comp2743Component', () => {
  let component: Comp2743Component;
  let fixture: ComponentFixture<Comp2743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
