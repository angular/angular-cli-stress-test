/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4734Component } from './comp-4734.component';

describe('Comp4734Component', () => {
  let component: Comp4734Component;
  let fixture: ComponentFixture<Comp4734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
