/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2963Component } from './comp-2963.component';

describe('Comp2963Component', () => {
  let component: Comp2963Component;
  let fixture: ComponentFixture<Comp2963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
