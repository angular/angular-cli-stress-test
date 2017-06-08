/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3214Component } from './comp-3214.component';

describe('Comp3214Component', () => {
  let component: Comp3214Component;
  let fixture: ComponentFixture<Comp3214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
