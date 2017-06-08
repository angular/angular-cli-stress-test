/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2971Component } from './comp-2971.component';

describe('Comp2971Component', () => {
  let component: Comp2971Component;
  let fixture: ComponentFixture<Comp2971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
