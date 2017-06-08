/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2993Component } from './comp-2993.component';

describe('Comp2993Component', () => {
  let component: Comp2993Component;
  let fixture: ComponentFixture<Comp2993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
