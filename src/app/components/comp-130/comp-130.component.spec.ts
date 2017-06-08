/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp130Component } from './comp-130.component';

describe('Comp130Component', () => {
  let component: Comp130Component;
  let fixture: ComponentFixture<Comp130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
