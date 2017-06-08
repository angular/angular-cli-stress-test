/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4784Component } from './comp-4784.component';

describe('Comp4784Component', () => {
  let component: Comp4784Component;
  let fixture: ComponentFixture<Comp4784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
