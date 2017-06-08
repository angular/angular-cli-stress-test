/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp98Component } from './comp-98.component';

describe('Comp98Component', () => {
  let component: Comp98Component;
  let fixture: ComponentFixture<Comp98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp98Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
