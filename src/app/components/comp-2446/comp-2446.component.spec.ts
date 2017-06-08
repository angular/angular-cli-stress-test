/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2446Component } from './comp-2446.component';

describe('Comp2446Component', () => {
  let component: Comp2446Component;
  let fixture: ComponentFixture<Comp2446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
