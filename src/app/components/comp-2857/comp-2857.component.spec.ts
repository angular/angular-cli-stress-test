/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2857Component } from './comp-2857.component';

describe('Comp2857Component', () => {
  let component: Comp2857Component;
  let fixture: ComponentFixture<Comp2857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
