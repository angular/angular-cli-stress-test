/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2235Component } from './comp-2235.component';

describe('Comp2235Component', () => {
  let component: Comp2235Component;
  let fixture: ComponentFixture<Comp2235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
