/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2452Component } from './comp-2452.component';

describe('Comp2452Component', () => {
  let component: Comp2452Component;
  let fixture: ComponentFixture<Comp2452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
