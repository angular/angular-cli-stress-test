/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2213Component } from './comp-2213.component';

describe('Comp2213Component', () => {
  let component: Comp2213Component;
  let fixture: ComponentFixture<Comp2213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
