/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2613Component } from './comp-2613.component';

describe('Comp2613Component', () => {
  let component: Comp2613Component;
  let fixture: ComponentFixture<Comp2613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
