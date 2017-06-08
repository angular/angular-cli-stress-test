/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4974Component } from './comp-4974.component';

describe('Comp4974Component', () => {
  let component: Comp4974Component;
  let fixture: ComponentFixture<Comp4974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
