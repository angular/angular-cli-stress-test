/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2582Component } from './comp-2582.component';

describe('Comp2582Component', () => {
  let component: Comp2582Component;
  let fixture: ComponentFixture<Comp2582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
