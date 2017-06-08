/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2143Component } from './comp-2143.component';

describe('Comp2143Component', () => {
  let component: Comp2143Component;
  let fixture: ComponentFixture<Comp2143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
