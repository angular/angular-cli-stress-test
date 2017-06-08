/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2636Component } from './comp-2636.component';

describe('Comp2636Component', () => {
  let component: Comp2636Component;
  let fixture: ComponentFixture<Comp2636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
