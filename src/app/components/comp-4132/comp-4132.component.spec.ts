/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4132Component } from './comp-4132.component';

describe('Comp4132Component', () => {
  let component: Comp4132Component;
  let fixture: ComponentFixture<Comp4132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
