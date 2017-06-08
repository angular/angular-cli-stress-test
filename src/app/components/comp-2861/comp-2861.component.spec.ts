/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2861Component } from './comp-2861.component';

describe('Comp2861Component', () => {
  let component: Comp2861Component;
  let fixture: ComponentFixture<Comp2861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
