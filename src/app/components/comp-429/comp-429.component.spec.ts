/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp429Component } from './comp-429.component';

describe('Comp429Component', () => {
  let component: Comp429Component;
  let fixture: ComponentFixture<Comp429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
