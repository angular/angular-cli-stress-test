/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp756Component } from './comp-756.component';

describe('Comp756Component', () => {
  let component: Comp756Component;
  let fixture: ComponentFixture<Comp756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
