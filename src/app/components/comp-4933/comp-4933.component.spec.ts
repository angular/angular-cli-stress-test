/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4933Component } from './comp-4933.component';

describe('Comp4933Component', () => {
  let component: Comp4933Component;
  let fixture: ComponentFixture<Comp4933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
