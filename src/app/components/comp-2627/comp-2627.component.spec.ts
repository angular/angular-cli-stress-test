/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2627Component } from './comp-2627.component';

describe('Comp2627Component', () => {
  let component: Comp2627Component;
  let fixture: ComponentFixture<Comp2627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
