/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2400Component } from './comp-2400.component';

describe('Comp2400Component', () => {
  let component: Comp2400Component;
  let fixture: ComponentFixture<Comp2400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
