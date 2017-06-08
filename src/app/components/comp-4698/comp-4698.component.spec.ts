/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4698Component } from './comp-4698.component';

describe('Comp4698Component', () => {
  let component: Comp4698Component;
  let fixture: ComponentFixture<Comp4698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
