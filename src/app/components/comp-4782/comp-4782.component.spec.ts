/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4782Component } from './comp-4782.component';

describe('Comp4782Component', () => {
  let component: Comp4782Component;
  let fixture: ComponentFixture<Comp4782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
