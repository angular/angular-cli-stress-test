/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3192Component } from './comp-3192.component';

describe('Comp3192Component', () => {
  let component: Comp3192Component;
  let fixture: ComponentFixture<Comp3192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
