/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4590Component } from './comp-4590.component';

describe('Comp4590Component', () => {
  let component: Comp4590Component;
  let fixture: ComponentFixture<Comp4590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
