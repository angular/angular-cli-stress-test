/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2495Component } from './comp-2495.component';

describe('Comp2495Component', () => {
  let component: Comp2495Component;
  let fixture: ComponentFixture<Comp2495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
